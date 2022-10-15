<template>
  <ul>
    <li v-for="item in paginatedData" :key="item._id">
      {{ item.name }}
    </li>
  </ul>
  <p v-show="!paginatedData.length">Loading...</p>
  <div class="pagination" v-show="paginatedData.length">
    <ul>
      <li @click="changePage(currentPage-1)" :class="{disabled: currentPage === 0}">&lt;</li>
      <li v-for="p in pages" :key="p" @click="changePage(p)" :class="{active: p === currentPage}">{{ p + 1 }}</li>
      <li @click="changePage(currentPage+1)" :class="{disabled: currentPage === pages.length - 1}">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      data: {type: Array, default: () => []},
      options: {type: Object, default: () => ({limit: 25, offset: 0})},
    },
    emits: ['changePage'],
    computed: {
      // sort data by name
      sortedData() {
        const sortedDataHolder = [...this.data];
        return sortedDataHolder.sort((a, b) => a.name.localeCompare(b.name));
      },
      // paginate data
      paginatedData() {
        return this.sortedData.slice(
          this.options.pagination.offset,
          this.options.pagination.offset + this.options.pagination.limit,
        );
      },
      // list of pages to display
      pages() {
        return new Array(
          Math.ceil(this.data.length / this.options.pagination.limit),
        )
          .fill()
          .map((v, i) => i);
      },
      // currently displayed page
      currentPage() {
        return this.options.pagination.offset / this.options.pagination.limit;
      },
    },
    methods: {
      changePage(page) {
        return this.$emit('changePage', page);
      },
    },
  };
</script>

<style scoped lang="scss">
.pagination ul {
  list-style: none;
  user-select: none;

  li {
    display: inline-block;
    padding: 0 4px;
    cursor: pointer;
    color: #888;

    &:hover {
      color: #000;
      font-weight: bold;
    }
    &.active {
      color: #000;
      font-weight: bold;
      pointer-events: none;
    }
    &.disabled {
      color: #ddd;
      pointer-events: none;
    }
  }
}
</style>
