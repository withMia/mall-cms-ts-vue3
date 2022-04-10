export const rules = {
  phone: [
    {
      required: true,
      message: '必须输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是11位数字',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '必须输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须是6位数字',
      trigger: 'blur'
    }
  ]
}
