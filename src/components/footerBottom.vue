<template>
  <div>
    <div id="footer">
      <p>&copy; Copyright 2019, Simple Notes. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBottom',
};
</script>

<style lang="scss" scoped>
  #footer{
    position: fixed;
    border-top: 3px solid #45D500;
    width: 100%;
    height: 30px;
    bottom: 0;
    background-color: #E5002D;
    padding: 0;
  }
  p{
    color: #45D500;
    padding: 3px;
    margin: 0;
  }
</style>
