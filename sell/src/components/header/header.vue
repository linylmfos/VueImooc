<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    }
  };
</script>

<style lang="scss">
  @import "../../common/stylus/mixin.scss";

  .header{
    color: #fff;
    background: #999;
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size:0;
      .avatar{
        display: inline-block; vertical-align: top;
        img{
          border-radius: 2px;
        }
      }
      .content{
        display: inline-block; margin-left: 16px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            width: 30px; height: 18px; display: inline-block;
            @include bg-image('brand');
            background-size: cover;
            vertical-align: top;
          }
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
          }
        }
        .description{
          margin-bottom: 10px; line-height: 12px; font-size: 12px;
        }
        .support{
          .icon{
            display: inline-block; width: 12px; height: 12px; margin-right: 4px; background-size: cover; background-repeat: no-repeat; vertical-align: top;
            &.decrease{
              @include bg-image('decrease_1');
            }
            &.discount{
              @include bg-image('discount_1');
            }
            &.guarantee{
              @include bg-image('guarantee_1');
            }
            &.invoice{
              @include bg-image('invoice_1');
            }
            &.special{
              @include bg-image('special_1');
            }
          }
          .text{
            line-height: 12px;
            font-size:10px;
          }
        }
      }
      .support-count{
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background:rgba(0,0,0,0.2);
        text-align: center;
        .count{
          vertical-align: top;
          font-size: 10px;
        }
        .icon-keyboard_arrow_right{
          margin-left: 2px;
          line-height: 24px;
          font-size: 10px;
        }
      }
    }
    .bulletin-wrapper{
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      background:rgba(7,17,27,0.2);
      overflow: hidden;
      text-overflow: ellipsis;
      .bulletin-title{
        vertical-align: top;
        display: inline-block;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        @include bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text{
        margin: 0 4px;
        font-size: 10px;
        vertical-align: top;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
      }
    }

  }
</style>