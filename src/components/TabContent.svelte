<script>
    export let content = '';
  </script>
  
  <div class="tab-content">
    {@html content}
  </div>
  
  <style>
    .tab-content {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 1rem;
    }
  </style>