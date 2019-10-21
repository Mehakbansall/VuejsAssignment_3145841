<template>
  <div class="article-preview">
   <div class="article-metadata">
       <a href="profile.html"><img :src="article.author.image" width="40px"></a>
       <div class="info">
           <a href="" class="author">{{article.author.username}}</a>
           <span class="date"></span>
       </div>
       <button class="btn btn-outline-primary btn-sm pull xs-right">
           <i class="ion-heart"></i> {{article.favoritesCount}}
       </button>
   </div>
   <router-link class="preview-link">  
   <h1>{{article.title}}</h1>
   <p>{{article.description}}</p>
       <span></span>
 </router-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component , Prop} from 'vue-property-decorator';
import {Article} from '@/store/models'

@Component 
export default class extends Vue {
  @Prop() article?: Article;
}
</script>
