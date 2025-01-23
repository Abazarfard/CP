<script>
  import '../app.css';
  import PasswordWall from '../components/PasswordWall.svelte';
  import Tabs from '../components/Tabs.svelte';
  import BusinessPlan from '../components/BusinessPlan.svelte';
  import MarketAnalysis from '../components/MarketAnalysis.svelte';
  import ProductOfferings from '../components/ProductOfferings.svelte';
  import ResearchDevelopment from '../components/ResearchDevelopment.svelte';
  import BusinessModel from '../components/BusinessModel.svelte';
  import MarketingSales from '../components/MarketingSales.svelte';
  import OperationalPlan from '../components/OperationalPlan.svelte';
  import FinancialPlan from '../components/FinancialPlan.svelte';
  import GrowthStrategy from '../components/GrowthStrategy.svelte';
  import Roadmap from '../components/Roadmap.svelte';

  const tabs = [
    { id: 'business-plan', label: 'بیزینس پلن' },
    { id: 'market-analysis', label: 'تحلیل بازار' },
    { id: 'product-offerings', label: 'محصولات مد نظر' },
    { id: 'research-development', label: 'تحقیقات و توسعه' },
    { id: 'business-model', label: 'بیزینس مدل' },
    { id: 'marketing-sales', label: 'بازاریابی و فروش' },
    { id: 'operational-plan', label: 'برنامه اجرایی' },
    { id: 'financial-plan', label: 'برنامه مالی' },
    { id: 'growth-strategy', label: 'استراتژی رشد' },
    { id: 'roadmap', label: 'رودمپ' }
  ];

  let activeTab = 'business-plan';
  let accessGranted = false;

  const handleTabChange = (event) => {
    activeTab = event.detail.tabId;
    console.log(`Active tab changed to: ${activeTab}`);
  };

  const grantAccess = () => {
    accessGranted = true;
  };
</script>

<style>
  @font-face {
    font-family: 'Aqeeq';
    src: url('/fonts/Aqeeq.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  main {
    font-family: 'Helvetica', 'Aqeeq', sans-serif;
    margin: 0 auto;
    padding: 2rem;
    direction: rtl;
  }

  .content {
    margin-top: 2rem;
  }
</style>

{#if !accessGranted}
  <PasswordWall onAccessGranted={grantAccess} />
{:else}
  <main>
    <h1>برنامه کسب‌وکار برای تولید محصولات کپیست</h1>
    <Tabs {tabs} {activeTab} on:change={handleTabChange} />

    <div class="content">
      {#if activeTab === 'business-plan'}
        <BusinessPlan />
      {:else if activeTab === 'market-analysis'}
        <MarketAnalysis />
      {:else if activeTab === 'product-offerings'}
        <ProductOfferings />
      {:else if activeTab === 'research-development'}
        <ResearchDevelopment />
      {:else if activeTab === 'business-model'}
        <BusinessModel />
      {:else if activeTab === 'marketing-sales'}
        <MarketingSales />
      {:else if activeTab === 'operational-plan'}
        <OperationalPlan />
      {:else if activeTab === 'financial-plan'}
        <FinancialPlan />
      {:else if activeTab === 'growth-strategy'}
        <GrowthStrategy />
      {:else if activeTab === 'roadmap'}
        <Roadmap />
      {/if}
    </div>
  </main>
{/if}