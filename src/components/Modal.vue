<template>
<!-- begin -->
<transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
            <div class="modal-header" id="modalTitle">
                <slot name="header">This is the defautl title</slot>
                <button type="button" aria-label="Close modal" class="btn-close" @click="close">X</button>
            </div>
            <div class="modal-body" id="modalDescription">
                <slot name="body">This is the defautl body</slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">This is the defautl footer</slot>
                <button type="button" aria-label="Close modal" class="btn-green" @click="close">Close Modal</button>
            </div>
        </div>
    </div>
</transition>
<!-- end -->
</template>

<script>

export default{
    name:'Modal',
    methods:{
        close(){
            this.$emit('close')
        },
    }
}
</script>

<style scoped>
    .modal-backdrop{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal{
        background: #ffffff;
        box-shadow: 2px 2px 20px 1px;
        display: flex;
        flex-direction: column;
    }
    .modal-header,
    .modal-footer{
        padding: 15px;
        display: flex;
    }
    .modal-header{
        position: relative;
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }
    .modal-footer{
        border-top: 1px solid #eeeeee;
        flex-direction: column;
        justify-content: flex-end;
    }
    .modal-body{
        position: relative;
        padding: 20px 15px;
    }
    .btn-close{
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #4aae9b;
        background: transparent;
    }
    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
    /* animation using transitions */
    .modal-fade-enter,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease;
    }
</style>
