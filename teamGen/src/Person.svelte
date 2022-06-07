<script>
    export let person
    export let selected
</script>

<div
class:selected="{selected}"
class="person">
    {person}
</div>

<style>

    .person {
        padding: 5px 8px;
        background-color: rgb(244, 244, 244);
        border-radius: 5px;
        width: fit-content;
        margin: 2px;
        border: 4px solid grey;
    }
    .selected {
        border: 4px solid rgb(0, 191, 0);
    }
</style>
