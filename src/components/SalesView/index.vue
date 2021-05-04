<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            :default-active="activeIndex"
            @select="onMenuSelect"
            mode="horizontal"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              size="small"
              range-separator="至"
              end-placeholder="结束日期"
              start-placeholder="开始日期"
              type="daterange"
              v-model="date"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption" />
          <div class="sales-view list">
            <div v-for="item in rankData" :key="item.no" class="list-item">
              <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                {{ item.no }}
              </div>
              <div class="list-item-name">{{ item.naem }}</div>
              <div class="list-item-money">{{ item.money }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      chartOption: {},
      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 2,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 3,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 4,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 5,
          name: "麦当劳",
          money: "323,234",
        },

        {
          no: 6,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 7,
          name: "麦当劳",
          money: "323,234",
        },
      ],
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>


<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
}
</style>
