<template>
  <div class="searchForm">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- label-position="left" -->
    <el-form :label-width="labelWidth">
      <el-form-item>
        <el-row>
          <el-col
            v-for="item in formItems"
            :key="item.label"
            :span="8"
            v-bind="colLayout"
          >
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              class="grid-content"
              :rule="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :showpassword="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleUpdateMV($event, item.field)"
                >
                </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleUpdateMV($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  :type="item.otherOptions.type"
                  :start-placeholder="item.otherOptions.startplaceholder"
                  :end-placeholder="item.otherOptions.endplaceholder"
                  :default-time="item.otherOptions.defaultTime"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleUpdateMV($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div class="footer"><slot name="footer"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  name: 'searchForm',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: 'auto'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 10px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },

  setup(props, { emit }) {
    const handleUpdateMV = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleUpdateMV
    }
  }
})
</script>

<style scoped lang="less">
.el-form {
  margin-top: 10px;
  .el-form-item label:after {
    content: '';
    display: inline-block;
    width: 100%;
  }

  .el-form-item__label {
    text-align: justify;
    height: 50px;
  }

  .el-form-item.is-required .el-form-item__label:before {
    content: none !important;
  }
}
</style>
