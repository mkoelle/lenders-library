<template>
  <div class="container">
    <div class="columns">
      <div>
        <ResourceList :resources="resources" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { data } from "@/data/data";
import { Resource } from "@/data/interfaces";
import ResourceList from "@/shared/ResourceList.vue";

export default defineComponent({
  components: {
    ResourceList
  },
  setup() {
    const resources = ref<Resource[]>([]);
    const fetchData = async (): Promise<void> => {
      resources.value = (await data.getResources()) as Array<Resource>;
    };
    fetchData();
    return {
      resources
    };
  }
});
</script>

<style></style>
