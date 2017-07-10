<template>
    <div>
        <carousel_grid>
            <a href="javascript:;" class="weui-grid">
                <div class="weui-grid__icon">
                    <img src="https://weui.io/images/icon_tabbar.png" alt="">
                </div>
                <p class="weui-grid__label">Grid</p>
            </a>
        </carousel_grid>
        <carousessl></carousessl>
    </div>
</template>
<script>
import grid from '../components/weuiGrids';
export default {
    name: 'Grid',
    components: {
        'carousel_grid': grid
    }
};

</script>