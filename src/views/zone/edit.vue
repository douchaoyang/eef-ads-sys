<template>
  <div class="app-container">
    <el-form
      ref="zoneEdit"
      :rules="rules"
      :model="zone"
      label-width="100px"
      class="form"
    >
      <el-form-item label="标识" prop="slug">
        <el-input disabled v-model="zone.slug"></el-input>
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
      <el-form-item label="Cookie" prop="slug">
        <el-input clearable v-model="cookie"></el-input>
      </el-form-item>
      <el-form-item label="冷却时长" prop="refractory_period" class="form-item">
        <el-input v-model="period">
          <template slot="append">秒</template>
        </el-input>
      </el-form-item>
      <el-form-item label="延迟打开" prop="open_after" class="form-item">
        <el-input v-model="open">
          <template slot="append">秒</template>
        </el-input>
      </el-form-item>
      <el-form-item label="定时关闭" prop="close_after" class="form-item">
        <el-input v-model="close">
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
export default {
  data() {
    return {
      id: 0,
      zone: {},
      vOps: ["top", "center", "bottom"],
      vertical: "",
      hOps: ["left", "center", "right"],
      horizental: "",
      cookie: "",
      period: 0,
      open: 0,
      close: 0,
      type: ["banner", "billboard"],
      rules: {
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
      this.$refs["zoneEdit"].validate((valid) => {
        if (valid) {
          this.$store.dispatch("data/updateZone", {
            id: this.id,
            data: {
              slug: this.zone.slug,
              width: this.zone.width,
              height: this.zone.height,
              type: this.zone.type,
              settings: {
                refractory_period: this.period,
                cookie_pattern: this.cookie,
                close_after: this.close,
                open_after: this.open,
                position: `${this.vertical} ${this.horizental}`,
              },
            },
          });
          Message.success("提交成功！");
          this.$router.push({ path: "/zone/index" });
        } else {
          return false;
        }
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.zone = JSON.parse(
      JSON.stringify(this.$store.getters.data.zones[this.id])
    );
    if (this.zone.settings) {
      this.vertical = this.zone.settings.position
        ? this.zone.settings.position.split(" ")[0]
        : "center";
      this.horizental = this.zone.settings.position
        ? this.zone.settings.position.split(" ")[1]
        : "center";
      this.cookie = this.zone.settings.cookie_pattern || "";
      this.period = this.zone.settings.refractory_period || 0;
      this.open = this.zone.settings.open_after || 0;
      this.close = this.zone.settings.close_after || 0;
    } else {
      this.vertical = "center";
      this.horizental = "center";
    }
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
