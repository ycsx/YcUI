<template>
    <div>
        <div class="expand-banner-contaner">
            <div @click="expandIndexHandler('minus')" class="expand-banner-arrow expand-banner-left">
               <img v-if="totalIndex !== 0" src="./assets/svg/Arrow.svg" alt="">
            </div>
            <div class="expand-banner-main">
                <div @click="[expandIndex = index,totalIndex = item.index]" 
                    :class="expandIndex===index?'expand-banner-main-expanded':'expand-banner-main-normal'" 
                    v-for="(item, index) in paginationData[currentPage]" :key="index">
                    <div :class="expandIndex===index?'expand-banner-title-expanded':'expand-banner-title-normal'">{{item.title}}</div>
                    <div style="display:flex;justify-content:flex-end;">
                        <div v-if="expandIndex===index" class="expand-banner-desc">
                            <p style="width:300px;">{{item.desc}}</p>
                        </div>
                        <div class="expand-banner-number" :class="expandIndex===index?'expand-banner-number-expanded':'expand-banner-number-normal'">{{item.number}}</div>
                    </div>
                </div>
            </div>
            <div @click="expandIndexHandler('plus')" class="expand-banner-arrow expand-banner-right">
                <img v-if="totalIndex !== data.length-1" src="./assets/svg/Arrow.svg" alt="">
            </div>
        </div>
        <div class="expand-page-counter">
            <div @click="[currentPage = index,expandIndex = 0]" :style="index !== currentPage?'background:rgba(238,238,238,1);':'background:rgba(2,98,255,1);'" v-for="(item, index) in pageNum" :key="index"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'YcExtend',
    props:{
        data:Array,
        pageSize:{
            type:Number,
            default:3
        }
    },
    data(){
        return{
            expandIndex:0,
            totalIndex:0,
            pageNum:0,
            currentPage:0,
            paginationData:[]
        }
    },
    mounted() {
        this.expandBannerInit()
    },
    methods:{
        expandBannerInit(){
            this.pageNum = Math.ceil(this.data.length/this.pageSize)
            for(let i = 0;i<this.pageNum;i++){
                this.paginationData.push(this.data.slice(i*this.pageSize,i+this.pageSize))
            }
        },
        expandIndexHandler(type){
            if(type === 'plus'){
                this.expandIndex++
                this.totalIndex++
                if(this.expandIndex >= this.pageSize){
                    this.expandIndex = 0
                    this.currentPage++
                }
                if(this.totalIndex >= this.data.length){
                    this.expandIndex = 0
                    this.currentPage = 0
                    this.totalIndex = 0
                }
            }else{
                this.expandIndex--
                this.totalIndex--
                if(this.expandIndex <= -1){
                    this.expandIndex = this.pageSize-1
                    this.currentPage--
                }
                if(this.totalIndex <= -1){
                    this.expandIndex = this.data.length%this.pageSize-1
                    this.currentPage = this.pageNum-1
                    this.totalIndex = this.data.length-1
                }
            }
        }
    }
}
</script>

<style>

</style>