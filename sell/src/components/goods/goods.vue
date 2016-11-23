<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="food in item.foods">
                <div class="icon">
                  <img alt="" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span>￥{{food.price}}</span>
                    <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];

      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          // console.log(this.goods);
        }
      });
    }
  };
</script>
<style lang="scss">
  @import '../../common/stylus/mixin.scss';
  .goods{
    position: absolute;
    top: 174px;
    width: 100%;
    bottom: 46px;
    display: flex;
    overflow: hidden;
    .menu-wrapper{
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        padding: 0 12px;
        .icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          &.decrease{
            @include bg-image('decrease_3');
          }
          &.discount{
            @include bg-image('discount_3');
          }
          &.guarantee{
            @include bg-image('guarantee_3');
          }
          &.invoice{
            @include bg-image('invoice_3');
          }
          &.special{
            @include bg-image('special_3');
          }
        }
        .text{
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          font-size: 12px;
          @include border-1px(rgba(7,17,27,0.1));
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .title{
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
    }

  }
</style>