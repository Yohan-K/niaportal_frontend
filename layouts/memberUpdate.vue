<template>
    <div id="wrap" class="mypage">
        <theHeader />
        <Nuxt />
        <theFooter />   
    </div>
</template>
<script>
import theFooter from '~/components/subFooter';
import theHeader from '~/components/header';
export default {
	components: {
    theFooter,
    theHeader
	},
};
</script>
