<template>
  <section class="post-tab-wrap flex-column">
    <div class="tab-head flex-row">
      <div :class="{'tab-item': true, 'active': index === 0}" v-for="(item,index) in tabNameArray" :key="index">
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="tab-body">
      <div class="post-list">
        <div class="post-img-item flex-row" v-for="item in tabPostList" :key="item._id">
          <div class="imgbox">
            <nuxt-link :to="'/post/' + item._id" tag="a" target="_blank">
              <img  v-if="!item.cover" src="~/assets/img/place.png" :alt="item.title">
              <img  v-else :src="item.cover" :alt="item.title">
            </nuxt-link>
          </div>
          <div class="txtbox flex-column flex-1">
            <h2><nuxt-link tag="a" target="_blank" :to="'/post/' + item._id">{{ item.title }}</nuxt-link></h2>
            <p class="desc">{{ item.description }}</p>
            <div class="foot flex-row">
              <nuxt-link tag="a" target="_blank" :to="'/user/' + item.author._id" class="author-box flex-row hidden-xs-only">
                <img v-if="!item.author.avatar" src="~/assets/img/avatar.png" alt="">
                <img v-else :src="item.author.avatar" :alt="item.author.nickname">
                <span>{{ item.author.nickname }}</span>
              </nuxt-link>
              <div class="action-box">
                <span>{{ item.create_time }}</span>
                <span><i class="iconfont">&#xe603;</i>{{ item.clicksNum }}</span>
                <span><i class="iconfont">&#xe606;</i>{{ item.likesNum }}</span>
                <span><i class="iconfont">&#xe8f8;</i>{{ item.collectionsNum }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tabNameArray: {
      type: Array,
      default: () => [
        {
          _id: '1',
          name: '最新文章'
        }
      ]
    },
    tabPostList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.post-tab-wrap{
  background-color: #fff;
  padding: 0 15px;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    margin-left: -5px;
    margin-right: -5px;
  }
}
.tab-head{
  border-bottom: 1px solid #f8f8f8;
  justify-content: flex-start;
  align-items: center;
  .tab-item{
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    font-size: 16px;
    color: #666;
  }
  .active{
    color: #409eff;
    font-weight: bold;
    border-bottom: 2px solid #409eff;
  }
}

.post-list{
  .post-img-item{
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #f8f8f8;
    transition: all .3s;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    &:hover{
      background-color: #fafafa;
    }
  }
}
.imgbox{
  margin-right: 20px;
  width: 245px;
  overflow: hidden;
  &:hover{
    img{
      transform: scale(1.05);
    }
  }
  img{
    display: block;
    width: 100%;
    height: 153px;
    transform: scale(1);
    transition: all .5s;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    width: 100%;
    margin-right: 0;
  }
}
.txtbox{
  justify-content: space-between;
  h2{
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    transition: all .3s;
    &:hover{
      color: #409eff;
      a{
        color: #409eff;
      }
    }
    a{
      transition: all .3s;
      font-size: 20px;
      color: #333;
    }
  }
  p.desc{
    margin: 10px 0;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot{
    justify-content: flex-start;
    height: 30px;
    line-height: 30px;
    color: #999;
  }
}
.author-box{
  margin-right: 30px;
  span{
    color: #999;
  }
  img{
    margin-right: 10px;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
}
.action-box{
  span{
    margin-right: 15px;
    i{
      margin-right: 5px;
    }
  }
}
</style>
