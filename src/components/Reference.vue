<template>
    <div id="reference">
        <div class="index">REFERENCE</div>
        <hr>
        <br>
        <div class="rfr-container">
            <div class="reference-left">
                <div class="rfr-name">
                    WILLIAM KLDMAN
                </div>
                <div class="rfr-post" id="highlight">
                    Director, Matris media limited
                </div>
                
                <div class="rfr-phone">
                    <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                    <div class="phone">555 123 5566</div>
                </div>
                <div class="rfr-email">
                    <div class="icon"><i class="bi bi-envelope-fill"></i></div>
                    <div class="email">williamkldman@gmail.com</div>
                </div> 
            </div>
            <div class="reference-right">
                <div class="rfr-name">
                    WILLIAM KLDMAN
                </div>
                <div class="rfr-post" id="highlight">
                    Director, Matris media limited
                </div>
                
                <div class="rfr-phone">
                    <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                    <div class="phone">555 123 5566</div>
                </div>
                <div class="rfr-email">
                    <div class="icon"><i class="bi bi-envelope-fill"></i></div>
                    <div class="email">williamkldman@gmail.com</div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
  export default {};
</script>

<style scoped>
.rfr-container{
    display: flex;
}
.reference-right{
    margin-left: 2%;
}
.reference-left, .reference-right{
    width: 49%;
    margin-top: 2%;
    line-height: 1.6;
    text-align: left;
}
.rfr-phone,.rfr-email{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.rfr-email{
    word-wrap: break-word;
}
.icon{
    width: 10%;
}
.phone,.email{
    width: 90%;
}
.rfr-name{
    font-weight: 650;
}
</style>