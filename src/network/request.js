import axios from "axios"
export function request(config) {
  return new Promise(((resolve, reject) => {
    const instance = axios.create({
      // baseURL:'http://123.207.32.32:8000/api/wh',
      // baseURL:'http://106.54.54.237:8000/api/wh',
      // baseURL:'http://152.136.185.210:8000/api/h3',
      // baseURL:'http://123.207.32.32:8000/api/h3',
      baseURL:'http://106.54.54.237:8000/api/h3',
      timeout:5000
    })
    instance.interceptors.request.use(config => {
      // this.$toast("加载中")
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:0
      });
      return config
    })

    instance.interceptors.response.use(res => {
      this.$toast.clear()
      return res.data
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  }))
}