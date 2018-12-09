<template>
  <div id="vcomments"></div>
</template>


<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'dYjGzpt7ofoS4iy2yugCsDXT-gzGzoHsz',// your appId
      appKey: '49yBvwE4DPWkGzeQI63uWYBh', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: '来说几句吧' 
    });
  },
}
</script>