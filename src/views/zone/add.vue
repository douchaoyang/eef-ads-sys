<template>
  <div class="app-container">
    <el-form
      ref="zoneAdd"
      :rules="rules"
      :model="zone"
      label-width="100px"
      class="form"
    >
      <el-form-item label="标识" prop="slug">
        <el-input v-model="zone.slug"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="zone.type" placeholder="类型">
          <el-option
            v-for="item in type"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="宽度" prop="width" class="form-item">
        <el-input v-model="zone.width">
          <template slot="append">px</template>
        </el-input>
      </el-form-item>
      <el-form-item label="高度" prop="height" class="form-item">
        <el-input v-model="zone.height">
          <template slot="append">px</template>
        </el-input>
      </el-form-item>
      <el-form-item label="位置" prop="position">
        <el-select v-model="vertical" style="margin-right: 20px; width: 160px">
          <el-option
            v-for="item in vOps"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <el-select v-model="horizental" style="width: 160px">
          <el-option
            v-for="item in hOps"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Cookie" prop="cookie_pattern">
        <el-input v-model="zone.settings.cookie_pattern"></el-input>
      </el-form-item>
      <el-form-item label="冷却时长" prop="refractory_period" class="form-item">
        <el-input v-model="zone.settings.refractory_period">
          <template slot="append">秒</template>
        </el-input>
      </el-form-item>
      <el-form-item label="延迟打开" prop="open_after" class="form-item">
        <el-input v-model="zone.settings.open_after">
          <template slot="append">秒</template>
        </el-input>
      </el-form-item>
      <el-form-item label="定时关闭" prop="close_after" class="form-item">
        <el-input v-model="zone.settings.close_after">
          <template slot="append">秒</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain class="submit" @click="handler"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { exist } from "@/utils/tool";
export default {
  data() {
    return {
      zone: {
        slug: "",
        width: "",
        height: "",
        type: "banner",
        settings: {
          refractory_period: 0,
          cookie_pattern: "",
          close_after: 0,
          open_after: 0,
          position: "center center",
        },
      },
      vOps: ["top", "center", "bottom"],
      vertical: "center",
      hOps: ["left", "center", "right"],
      horizental: "center",
      type: ["banner", "billboard"],
      rules: {
        slug: [
          {
            required: true,
            message: "请填写唯一标识",
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择类型",
            trigger: "change",
          },
        ],
        width: [
          {
            required: true,
            message: "请填写宽度",
            trigger: "blur",
          },
        ],
        height: [
          {
            required: true,
            message: "请填写高度",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handler() {
      this.$refs["zoneAdd"].validate((valid) => {
        if (valid) {
          if(exist(this.$store.getters.data.zones, 'slug', this.zone.slug)) {
            Message.error("已存在的广告位！");
            return false;
          }
          this.zone.settings.position = `${this.vertical} ${this.horizental}`;
          this.$store.dispatch("data/addZone", this.zone);
          Message.success("提交成功！");
          this.$router.push({ path: "/zone/index" });
        } else {
          return false;
        }
      });
    },
  },
  created() {
    this.vertical = this.zone.settings.position.split(" ")[0];
    this.horizental = this.zone.settings.position.split(" ")[1];
  },
};
</script>

<style scoped>
.form {
  width: 50%;
}
.submit {
  width: 100px;
}
.form-item {
  width: 260px;
}
</style>
