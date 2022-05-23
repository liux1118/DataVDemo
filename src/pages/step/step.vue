<template>
  <div class="step">
    <div class="step-top">
      <span class="step-top__time">上一次检测时间：2022-05-20 17:00:00</span>
      <div class="step-top__btn">
        <qz-button class="download" type="normal" :disabled="disabled">
          日志下载
        </qz-button>
        <qz-button
          class="start"
          type="normal"
          @click="handleStart"
          :disabled="disabled"
        >
          开始检测
        </qz-button>
      </div>
    </div>

    <div class="step-main">
      <div>
        <el-button @click="nextStep">下一步</el-button>
      </div>
      <div>{{ active }}</div>
      <el-steps :active="active" align-center finish-status="success">
        <el-step
          v-for="(item, index) in stepList"
          :key="index"
          :status="item.status"
        >
          <template slot="icon">
            <qz-icon :class="item.icon"></qz-icon>
          </template>
          <template slot="title">
            <span v-show="index > active">
              {{ item.wait }}
            </span>
            <span v-show="index == active">
              {{ item.process }}
            </span>
            <span v-show="index < active">
              {{ item.success }}
            </span>
          </template>
        </el-step>
      </el-steps>
    </div>
    <div class="step-content">
      <div class="step-content__left">
        <div class="text">请点击开始检测按钮</div>
        <div class="text"></div>
      </div>
      <div class="step-content__right">
        <div class="error">异常情况：</div>
        <div class="content" v-for="(item, index) in errorList" :key="index">
          <qz-icon class="icon-caret-down-copy"></qz-icon>
          <span class="title">{{ item.title }}</span>
          <div
            class="item"
            v-for="(error, index) in item.itemList"
            :key="index"
          >
            <i class="el-icon-circle-close"></i>
            <span class="title">{{ error.title }}</span>
            <div class="suggest">处理建议：{{ error.suggest }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      disabled: false,
      stepList: [
        {
          wait: '检测待开始',
          process: '检测待开始',
          success: '检测开始',
          error: '检测异常',
          icon: 'icon-spinner-line',
          status: ''
        },
        {
          wait: '网关待检测',
          process: '网关检测中',
          success: '网关检测完成',
          error: '网关异常',
          icon: 'icon-spinner-line',
          status: ''
        },
        {
          wait: 'kafka待检测',
          process: 'kafka检测中',
          success: 'kafka检测完成',
          error: 'kafka异常',
          icon: 'icon-spinner-line',
          status: ''
        },
        {
          wait: 'handler待检测',
          process: 'handler检测中',
          success: 'handler检测完成',
          error: 'handler异常',
          icon: 'icon-spinner-line',
          status: ''
        },
        {
          wait: 'discover待检测',
          process: 'discover检测中',
          success: 'discover检测完成',
          error: 'discover异常',
          icon: 'icon-spinner-line',
          status: ''
        },
        {
          wait: '检测待完成',
          process: '检测待完成',
          success: '检测完成',
          error: '检测完成',
          icon: 'icon-spinner-line',
          status: ''
        }
      ],
      statusOptions: [
        {
          status: 'wait'
        },
        {
          status: 'process'
        },
        {
          status: 'error'
        },
        {
          status: 'success'
        }
      ],
      errorList: [
        {
          title: '网关',
          itemList: [
            {
              title: '网关开启异常',
              suggest: '当前网关开启异常，'
            },
            {
              title: '网关消费异常',
              suggest: '当前网关消费异常，'
            }
          ]
        },
        {
          title: 'handle',
          itemList: [
            {
              title: 'handle开启异常',
              suggest: '当前handle开启异常，'
            }
          ]
        },
        {
          title: 'handle',
          itemList: [
            {
              title: 'handle开启异常',
              suggest: '当前handle开启异常，'
            }
          ]
        }
      ]
    };
  },
  methods: {
    nextStep() {
      this.active++;
      if (this.active > 6) this.active = 0;
    },
    handleStart() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

<style lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
// 边框样式
.border-style() {
  background: #ffffff;
  border: 1px solid #ececee;
}
.step {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  & .step-top {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    &__time {
      background: #f8f9fd;
      border: 1px solid rgba(220, 223, 230, 1);
      border-radius: 4px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #303133;
      letter-spacing: 0;
      font-weight: 400;
      padding: 2px 4px;
      height: 25px;
      line-height: 25px;
    }
    &__btn {
      & .download {
        margin-right: 6px;
      }
      & .start {
        margin-left: 6px;
      }
    }
  }
  & .step-main {
    padding: 20px;
    height: 178px;
    margin-bottom: 20px;
    background: #ffffff;
    border: 1px solid #dcdfe6;
  }
  & .step-content {
    width: 100%;
    height: 360px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    &__left {
      position: relative;
      width: 50%;
      padding: 20px;
      height: 100%;
      .border-style();
      background: #303133;
      overflow: scroll;
      & .text {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0.37px;
        font-weight: 400;
      }
    }
    &__right {
      position: relative;
      width: 50%;
      padding: 20px;
      height: 100%;
      .border-style();
      background: #ffffff;
      border: 1px solid rgba(220, 223, 230, 1);
      overflow: scroll;
      & .error {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #303133;
        letter-spacing: 0.42px;
        font-weight: 500;
      }
      & .content {
        margin-top: 15px;
        & .icon-caret-down-copy {
          color: #909399;
        }
        & .title {
          margin-left: 10px;
        }
        & .item {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #ff0000;
          letter-spacing: 0.37px;
          font-weight: 400;
          margin-top: 15px;
          margin-left: 25px;
          & .title {
            margin-left: 10px;
          }
          & .suggest {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #000000;
            letter-spacing: 0.37px;
            font-weight: 400;
            margin-top: 15px;
            margin-left: 25px;
          }
        }
      }
    }
  }
}
</style>
