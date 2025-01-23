<script>
    export let roadmap = [
      { month: 'مرحله اول', description: 'استارت پروژه و تهیه ملزومات' },
      { month: 'مرحله دوم', description: 'ساختار طراحی و نمونه ها' },
      { month: 'مرحله سوم', description: 'شروع توسعه کار و پساده سازی هسته های اصلی کار' },
      { month: 'مرحله چهارم', description: 'اجرای الباقی کار ها و گرفتن فیدبک و گزارش کار' },
      { month: 'مرحله پنجم', description: 'آماده سازی برای ارايه و چک های نهایی' },
      { month: 'مرحله ششم', description: 'اجرای پروژه و دریافت فیدبک' }
    ];
  </script>
  
  <style>
    .timeline {
      display: flex;
      overflow-x: auto;
      margin: 2rem 0;
    }
    .timeline-item {
      position: relative;
      padding: 1rem;
      border-top: 2px solid #007bff;
      margin-right: 1.5rem;
      flex-shrink: 0;
    }
    .timeline-item:before {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      width: 20px;
      height: 20px;
      background: #007bff;
      border-radius: 50%;
      transform: translateX(-50%);
    }
    .timeline-item .month {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .timeline-item .description {
      margin: 0;
    }
  </style>
  
  <div class="timeline">
    {#each roadmap as { month, description }}
      <div class="timeline-item">
        <div class="month">{month}</div>
        <div class="description">{description}</div>
      </div>
    {/each}
  </div>