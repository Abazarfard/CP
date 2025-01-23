<script>
  export let tabs = [];
  export let activeTab = '';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleClick = (tabId) => {
    dispatch('change', { tabId });
  };
</script>

<style>
  .tabs {
    display: flex;
    overflow-x: auto;
    border-bottom: 2px solid #ccc;
  }

  .tab {
    padding: 1rem;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1rem;
    border-bottom: 3px solid transparent;
    white-space: nowrap;
  }

  .tab.active {
    border-color: #007bff;
    color: #007bff;
  }
</style>

<div class="tabs">
  {#each tabs as { id, label }}
    <button
      class="tab {activeTab === id ? 'active' : ''}"
      on:click={() => handleClick(id)}
    >
      {label}
    </button>
  {/each}
</div>