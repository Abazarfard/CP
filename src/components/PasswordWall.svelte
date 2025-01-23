<script>
    export let onAccessGranted;
    let password = '';
    const correctPassword = 'adib11'; // Replace with your desired password
  
    const handleSubmit = () => {
      if (password === correctPassword) {
        onAccessGranted();
      } else {
        alert('Incorrect password');
      }
    };
  </script>
  
  <style>
    .password-wall {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f0f0f0;
    }
  
    .password-wall input {
      padding: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  
    .password-wall button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
  
  <div class="password-wall">
    <input type="password" bind:value={password} placeholder="Enter password" />
    <button on:click={handleSubmit}>Submit</button>
  </div>