// Fixed AMRIT CHO Performance Analytics Dashboard JavaScript
// Copyright by DigiFacility Team-DPH_CoE

// Global variables
let currentTheme = 'cool';
let weeklyChart = null;

// Dashboard Data
const dashboardData = {
  blocks: [
    { name: "KHARUPETIA", coord1: "MOHIBUL ISLAM", coord2: "ABU KHAYER IFTIKAR", activity: 75.0, color: "#a7f3d0" },
    { name: "PATHARIGHAT", coord1: "PRATAP RAJBONGSHI", coord2: "NIRANJAN SAHARIAH", activity: 32.3, color: "#fecaca" },
    { name: "Sipajhar", coord1: "BALODEV MEDHI", coord2: "MUNINDRA SALOI", activity: 47.2, color: "#fed7aa" },
    { name: "JALJALI", coord1: "SAGARIKA PRITY BARUAH", coord2: "PRIYANKA DAS", activity: 53.1, color: "#fef3c7" }
  ],
  coordinators: [
    { name: "MUNINDRA SALOI", block: "Sipajhar", activity: 79.4, chos: 11, category: "excellent" },
    { name: "PRIYANKA DAS", block: "JALJALI", activity: 76.6, chos: 10, category: "excellent" },
    { name: "MOHIBUL ISLAM", block: "KHARUPETIA", activity: 75.6, chos: 20, category: "excellent" },
    { name: "ABU KHAYER IFTIKAR", block: "KHARUPETIA", activity: 73.8, chos: 14, category: "excellent" },
    { name: "NIRANJAN SAHARIAH", block: "PATHARIGHAT", activity: 59.7, chos: 6, category: "good" },
    { name: "SAGARIKA PRITY BARUAH", block: "JALJALI", activity: 34.2, chos: 13, category: "needs_improvement" },
    { name: "BALODEV MEDHI", block: "Sipajhar", activity: 24.2, chos: 15, category: "needs_improvement" },
    { name: "PRATAP RAJBONGSHI", block: "PATHARIGHAT", activity: 17.9, chos: 11, category: "critical" }
  ],
  trends: [
    { period: "Baseline", activity: 76.2, opd: 854 },
    { period: "Week 1", activity: 47.5, opd: 242 },
    { period: "Week 2", activity: 49.5, opd: 238 },
    { period: "Week 3", activity: 48.5, opd: 222 }
  ]
};

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('AMRIT Dashboard initializing...');
  initializeDashboard();
  createWeeklyChart();
});

function initializeDashboard() {
  // Set up initial state
  console.log('Dashboard initialized with 8 coordinators');
  
  // Load saved theme
  const savedTheme = localStorage.getItem('amrit-theme') || 'cool';
  setColorTheme(savedTheme);
  
  // Add additional initialization if needed
  setupTooltips();
}

// Tab switching function
function switchTab(tabName) {
  console.log('Switching to tab:', tabName);
  
  // Remove active class from all tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Add active class to selected tab
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
  
  // Load tab-specific content
  loadTabContent(tabName);
}

function loadTabContent(tabName) {
  switch(tabName) {
    case 'overview':
      if (!weeklyChart) {
        setTimeout(createWeeklyChart, 100);
      }
      break;
    case 'performance-monitor':
      setTimeout(() => {
        createPerformanceCharts();
      }, 100);
      break;
  }
}

// Color theme toggle
function toggleColorTheme() {
  console.log('Toggling color theme');
  currentTheme = currentTheme === 'cool' ? 'warm' : 'cool';
  setColorTheme(currentTheme);
  localStorage.setItem('amrit-theme', currentTheme);
}

function setColorTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  const toggleIcon = document.querySelector('.toggle-icon');
  if (toggleIcon) {
    toggleIcon.textContent = theme === 'cool' ? '🌙' : '☀️';
  }
  currentTheme = theme;
}

// Chart creation function
function createWeeklyChart() {
  const canvas = document.getElementById('weeklyTrendsChart');
  if (!canvas) {
    console.log('Weekly chart canvas not found');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  
  // Destroy existing chart if it exists
  if (weeklyChart) {
    weeklyChart.destroy();
  }
  
  console.log('Creating weekly trends chart...');
  
  weeklyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dashboardData.trends.map(t => t.period),
      datasets: [
        {
          label: 'Activity Rate (%)',
          data: dashboardData.trends.map(t => t.activity),
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true,
          yAxisID: 'y'
        },
        {
          label: 'OPD Registrations',
          data: dashboardData.trends.map(t => t.opd),
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: false,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        title: {
          display: true,
          text: '8-Coordinator Performance Trends (4 Periods)',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Time Period'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Activity Rate (%)'
          },
          min: 0,
          max: 100
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'OPD Registrations'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });
  
  console.log('Weekly chart created successfully');
}

// Performance charts for monitor tab
function createPerformanceCharts() {
  createHeatmapChart();
  createInfrastructureChart();
}

function createHeatmapChart() {
  const canvas = document.getElementById('performanceHeatmap');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.blocks.map(b => b.name),
      datasets: [{
        label: 'Activity Rate (%)',
        data: dashboardData.blocks.map(b => b.activity),
        backgroundColor: dashboardData.blocks.map(b => b.color),
        borderColor: '#333',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Block Performance Heatmap'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Activity Rate (%)'
          }
        }
      }
    }
  });
}

function createInfrastructureChart() {
  const canvas = document.getElementById('infrastructureChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['CHO Availability', 'Facility Functionality', 'Supervision Effectiveness', 'Technology Readiness'],
      datasets: [{
        label: 'Readiness Score (%)',
        data: [78, 65, 72, 45],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3b82f6',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Infrastructure Readiness Assessment'
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Filter functions
function handleBlockFilter(select) {
  console.log('Block filter:', select.value);
  // Add filter logic here
}

function handleWeekFilter(select) {
  console.log('Week filter:', select.value);
  // Add filter logic here
}

function handleCoordinatorFilter(select) {
  console.log('Coordinator filter:', select.value);
  // Add filter logic here
}

function handleStatusFilter(select) {
  console.log('Status filter:', select.value);
  // Add filter logic here
}

function handlePeriodFilter(select) {
  console.log('Period filter:', select.value);
  // Add filter logic here
}

function handleCHOSearch(input) {
  const searchTerm = input.value.toLowerCase();
  const rows = document.querySelectorAll('#choTable tbody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
}

// Block interaction functions
function filterByBlock(blockName) {
  console.log('Filtering by block:', blockName);
  
  // Visual feedback
  document.querySelectorAll('.block-area').forEach(area => {
    area.classList.remove('selected');
  });
  
  document.querySelector(`[data-block="${blockName}"]`)?.classList.add('selected');
  
  // Switch to block analysis tab
  switchTab('block-analysis');
  
  // Update block filter dropdown
  const blockFilter = document.getElementById('blockFilter');
  if (blockFilter) {
    blockFilter.value = blockName;
  }
}

function showBlockDetails(blockName) {
  const block = dashboardData.blocks.find(b => b.name === blockName);
  if (!block) return;
  
  const coord1 = dashboardData.coordinators.find(c => c.name === block.coord1);
  const coord2 = dashboardData.coordinators.find(c => c.name === block.coord2);
  
  const detailsDiv = document.getElementById('coordinatorInfo');
  if (detailsDiv) {
    detailsDiv.innerHTML = `
      <div class="coordinator-comparison">
        <div class="coordinator-detail">
          <h4>${coord1.name}</h4>
          <p><strong>CHOs:</strong> ${coord1.chos}</p>
          <p><strong>Activity Rate:</strong> ${coord1.activity}%</p>
          <p><strong>Category:</strong> ${coord1.category.replace('_', ' ').toUpperCase()}</p>
        </div>
        <div class="coordinator-detail">
          <h4>${coord2.name}</h4>
          <p><strong>CHOs:</strong> ${coord2.chos}</p>
          <p><strong>Activity Rate:</strong> ${coord2.activity}%</p>
          <p><strong>Category:</strong> ${coord2.category.replace('_', ' ').toUpperCase()}</p>
        </div>
      </div>
      <div class="performance-gap">
        <h5>Performance Gap: ${Math.abs(coord1.activity - coord2.activity).toFixed(1)}%</h5>
      </div>
    `;
  }
}

function showBlockPopup(blockName) {
  const block = dashboardData.blocks.find(b => b.name === blockName);
  if (!block) return;
  
  alert(`${blockName} Block\nCoordinators: ${block.coord1}, ${block.coord2}\nActivity Rate: ${block.activity}%`);
}

// Interactive map functions
function switchLayer(layerType) {
  console.log('Switching to layer:', layerType);
  
  // Update active layer button
  document.querySelectorAll('.layer-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.querySelector(`[data-layer="${layerType}"]`)?.classList.add('active');
}

// Modal functions
function openActiveStatsModal() {
  console.log('Opening active stats modal');
  const modal = document.getElementById('activeStatsModal');
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal() {
  console.log('Closing modal');
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
}

function filterModalStats() {
  console.log('Filtering modal stats');
  // Add modal filter logic here
}

// Export function
function exportToCsv() {
  console.log('Exporting to CSV');
  
  const csvContent = "CHO Name,Block,Coordinator,Facility,Contact,Status\n" +
    "Pranjali Borah,KHARUPETIA,MOHIBUL ISLAM,Baruapara AAM,9876543210,Inactive\n" +
    "Sabrina Sahin,KHARUPETIA,ABU KHAYER IFTIKAR,Bhakatpara AAM,9876543212,Active";
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'amrit-cho-directory.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Action button functions
function sendNotification(choName) {
  alert(`📱 Notification sent to ${choName}: "Please use AMRIT application to update your CHO activities and register patients."`);
  console.log(`Notification sent to: ${choName}`);
}

function scheduleIntervention(coordinatorName) {
  alert(`📅 Intervention meeting scheduled for ${coordinatorName} within 24 hours. Supervisor will be notified.`);
  console.log(`Intervention scheduled for: ${coordinatorName}`);
}

function arrangeMentoring() {
  alert('📚 Peer mentoring session arranged between MUNINDRA SALOI and BALODEV MEDHI for next week.');
  console.log('Mentoring session arranged');
}

function documentSuccess() {
  alert('📄 KHARUPETIA block success methodology documentation initiated. Report will be shared with all coordinators.');
  console.log('Success documentation started');
}

// Tooltip setup
function setupTooltips() {
  document.querySelectorAll('.cho-inactive').forEach(row => {
    row.addEventListener('mouseenter', function() {
      this.title = 'Click to send mobile notification to use AMRIT app';
    });
  });
}

// Window click handler for modal close
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Console log for verification
console.log('AMRIT Dashboard JavaScript loaded successfully');
console.log('8-Coordinator structure initialized');
console.log('Copyright by DigiFacility Team-DPH_CoE');
