# AMRIT CHO Performance Analytics Dashboard

![Dashboard](https://img.shields.io/badge/Healthcare-Analytics-blue) ![Status](https://img.shields.io/badge/Status-Live-green) ![Version](https://img.shields.io/badge/Version-2.0-orange)

## 🏥 Project Overview

Enhanced healthcare analytics dashboard monitoring **101 Community Health Officers (CHOs)** across **Darrang District, Assam** using AMRIT application data. Features **8 Block Coordinators** (2 per block) supervising healthcare delivery across 4 blocks and 100 facilities.

## 🎯 Live Dashboard
**[🔗 Access Dashboard](https://yourusername.github.io/amrit-cho-dashboard/)**

## 📊 Key Features

### ✅ Corrected 8-Coordinator Structure
- **KHARUPETIA Block**: MOHIBUL ISLAM (20 CHOs) + ABU KHAYER IFTIKAR (14 CHOs)
- **PATHARIGHAT Block**: PRATAP RAJBONGSHI (11 CHOs) + NIRANJAN SAHARIAH (6 CHOs)
- **Sipajhar Block**: BALODEV MEDHI (15 CHOs) + MUNINDRA SALOI (11 CHOs)
- **JALJALI Block**: SAGARIKA PRITY BARUAH (13 CHOs) + PRIYANKA DAS (10 CHOs)

### ✅ Enhanced Visual Design
- **Lighter Map Colors**: Improved visibility with professional healthcare color scheme
- **Assam State Background**: Contextual geographic representation
- **Interactive Elements**: Click-to-filter blocks and coordinators
- **Responsive Design**: Mobile-friendly government-grade interface

### ✅ Comprehensive Analytics
- **Real-time Monitoring**: Dynamic performance tracking
- **4-Period Analysis**: Beginning to Aug 18, Week 1-3 comparative data
- **Intervention Alerts**: Coordinator-specific action recommendations
- **Performance Calculations**: Transparent methodology display above copyright

## 🏆 Performance Highlights

### Top Performing Coordinators:
1. **MUNINDRA SALOI** (Sipajhar) - **79.4%** activity rate 🏆
2. **PRIYANKA DAS** (JALJALI) - **76.6%** activity rate
3. **MOHIBUL ISLAM** (KHARUPETIA) - **75.6%** activity rate

### Critical Intervention Required:
1. **PRATAP RAJBONGSHI** (PATHARIGHAT) - **17.9%** activity rate ⚠️
2. **BALODEV MEDHI** (Sipajhar) - **24.2%** activity rate

### Block Performance Ranking:
1. **KHARUPETIA**: 75.0% (High) - Best practice model
2. **JALJALI**: 53.1% (Medium) - Mixed performance  
3. **Sipajhar**: 47.2% (Low) - Large coordinator gap (55.2%)
4. **PATHARIGHAT**: 32.3% (Critical) - Emergency intervention needed

## 📱 Dashboard Features

### 1. Overview Tab - Strategic Command Center
- **Assam Map Background** with Darrang district highlighting
- **Interactive District Map** with lighter colors and click-to-filter
- **8-Coordinator Performance Summary** with ranking
- **Key Metrics Cards** including "8 Block Coordinators (2 per block)"
- **Weekly Trends Chart** showing performance across 4 periods

### 2. Block Analysis Tab - Comparative Intelligence  
- **Dual Dropdown Filters**: Block + Week selection
- **Dynamic Coordinator Details**: Both coordinators for selected block
- **Performance Comparison Tables**: Side-by-side metrics
- **Performance Gap Analysis**: Coordinator disparities within blocks

### 3. CHO Directory Tab - Complete Personnel Database
- **Advanced Search & Filter**: By coordinator, block, facility, status
- **Glowing Inactive CHO Alerts** with hover notifications
- **8-Coordinator Filter Dropdown**: All coordinators listed
- **CSV Export Functionality**: Download filtered results
- **Enhanced Download Section**: All Excel files and processed data

### 4. Interactive Map Tab - Geographic Intelligence
- **Full-screen Map** with Assam state background
- **Data Layer Toggles**: Activity Rate, OPD Count, ABHA Registration
- **Click-to-Explore**: Detailed coordinator popups
- **Enhanced Legend**: Color-coded performance levels

### 5. Performance Monitor Tab - Real-time Analytics
- **Coordinator Rankings**: All 8 coordinators by performance
- **Live KPI Tracking**: Dynamic updates based on week selection
- **Performance Charts**: Heatmap and infrastructure readiness
- **📋 Calculation Methods Section**: Above copyright area with detailed explanations

### 6. Alerts & Notifications Tab - Actionable Insights
- **Coordinator-specific Alerts**: Target individual interventions
- **Performance Gap Warnings**: 61.5% difference between top and bottom
- **Intervention Timeline**: Priority-based action scheduling
- **Best Practice Recommendations**: KHARUPETIA model sharing

## 📥 Available Downloads

### Original Excel Files:
- **AMRIT-data-18-August-2025.xlsx** - Baseline Period
- **AMRIT-data-14-to-20-August-2025.xlsx** - Week 1
- **AMRIT-data-21-to-27-August-2025.xlsx** - Week 2  
- **AMRIT-data-28-August-to-04-September-2025.xlsx** - Week 3

### Processed Analytics Data:
- **detailed_8_coordinator_performance.csv** - Individual coordinator metrics
- **comprehensive_8_coordinator_block_analysis.csv** - Block-wise analysis
- **coordinator_intervention_plan.csv** - Action plans for each coordinator
- **block_performance_comparison.csv** - Comparative performance matrix
- **dashboard_corrected_8_coordinators.json** - Complete configuration

## 🚨 Critical Insights & Alerts

### Emergency Interventions:
- **PRATAP RAJBONGSHI**: 17.9% activity rate - Immediate supervision required
- **PATHARIGHAT Block**: 32.3% average - Both coordinators need support
- **Performance Gap**: 61.5% between top and bottom performers

### Success Models:
- **KHARUPETIA Block**: Both coordinators >70% - Share methodologies
- **MUNINDRA SALOI**: 79.4% performance - Mentor underperformers
- **Peer Learning**: High performers training low performers

## 🛠️ Technical Specifications

### Technologies:
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Charts**: Chart.js for interactive visualizations
- **Design**: Professional government-grade UI/UX
- **Responsive**: Mobile-first approach with touch functionality
- **Hosting**: GitHub Pages with HTTPS

### Special Features:
- **Color Temperature Toggle**: Warm/cool theme switching
- **Interactive Filtering**: Real-time data updates
- **CSV Export**: Blob URL generation for downloads
- **Modal System**: Active statistics popup
- **Map Interactions**: SVG-based clickable regions

## 📲 Mobile Features
- Touch-friendly interface optimized for field healthcare workers
- Responsive grid layouts adapting to all screen sizes  
- Swipe navigation between tabs
- Optimized charts and tables for mobile viewing
- Tap-to-call functionality for CHO contacts

## 🔄 Data Management

### Weekly Updates:
1. Upload new Excel files to `data/excel-files/`
2. Process data using analysis scripts
3. Update CSV files in `data/processed/`
4. Dashboard auto-refreshes with new data

### Performance Monitoring:
- Activity rate calculations: (Active CHOs ÷ Total CHOs) × 100
- Performance ranking: Activity (40%) + OPD (30%) + ABHA (20%) + Consistency (10%)  
- Infrastructure readiness: Average of CHO availability + facility functionality + supervision effectiveness

## 🚀 Quick Deployment Guide

### Step 1: Repository Setup
```bash
git clone https://github.com/yourusername/amrit-cho-dashboard.git
cd amrit-cho-dashboard
```

### Step 2: File Structure
```
amrit-cho-dashboard/
├── index.html (Main dashboard)
├── style.css (Enhanced CSS with lighter colors)  
├── app.js (JavaScript with 8-coordinator logic)
├── data/
│   ├── excel-files/ (Original Excel reports)
│   ├── processed/ (CSV analytics data)
│   └── dashboard_corrected_8_coordinators.json
├── README.md (This file)
└── github-deployment-complete-guide.md (Detailed guide)
```

### Step 3: GitHub Pages
1. Push files to main branch
2. Enable GitHub Pages in repository settings
3. Select "Deploy from branch" → main → / (root)
4. Dashboard live at: `https://yourusername.github.io/amrit-cho-dashboard/`

## 📊 Key Metrics Summary

| Metric | Value | Details |
|--------|--------|---------|
| **Total CHOs** | 101 | Community Health Officers monitored |
| **Total Blocks** | 4 | KHARUPETIA, PATHARIGHAT, Sipajhar, JALJALI |
| **Block Coordinators** | 8 | 2 coordinators per block |
| **Total Facilities** | 100 | Healthcare facilities covered |
| **Analysis Periods** | 4 | Beginning to Aug 18, Week 1-3 |
| **Current Activity Rate** | 48.5% | Week 3 performance |
| **Total OPD (All Periods)** | 1,556 | Outpatient registrations |
| **Total ABHA (All Periods)** | 43 | Digital health ID registrations |
| **Performance Gap** | 61.5% | Between top and bottom coordinators |

## 🎨 Enhanced Features

### Color Scheme:
- **KHARUPETIA**: #a7f3d0 (Light green) - High performance
- **JALJALI**: #fef3c7 (Light yellow) - Medium performance  
- **Sipajhar**: #fed7aa (Light orange) - Low performance
- **PATHARIGHAT**: #fecaca (Light red) - Critical performance

### Calculation Methods (Above Copyright):
```
Activity Rate = (Active CHOs ÷ Total CHOs) × 100
Performance Ranking = Activity Rate (40%) + OPD (30%) + ABHA (20%) + Consistency (10%)
Infrastructure Readiness = Average of CHO availability, facility functionality, supervision effectiveness
```

## 🔒 Security & Compliance
- HTTPS-enabled through GitHub Pages
- No personal health information (PHI) exposure
- Government-grade security headers
- Privacy-compliant data handling
- Secure CSV download via blob URLs

## 📞 Support & Maintenance

### For Healthcare Administrators:
- Monitor individual coordinator performance
- Identify intervention priorities
- Track block-wise progress trends
- Plan resource allocation strategies

### For Block Coordinators:
- Compare performance with peers
- Access intervention recommendations
- Monitor CHO supervision effectiveness
- Plan targeted support activities

### For Policy Makers:
- Assess overall program effectiveness
- Identify systemic training needs
- Plan healthcare infrastructure improvements
- Monitor digital health adoption (ABHA)

## 📈 Future Enhancements
- **Automated Data Processing**: Weekly Excel file processing
- **SMS Integration**: Direct CHO notifications
- **Advanced Analytics**: Predictive performance modeling
- **Mobile App**: Dedicated coordinator mobile application
- **Real-time Sync**: Live AMRIT system integration

## 📜 License & Copyright
**MIT License** - Open source healthcare analytics solution

---

**Copyright by DigiFacility Team-DPH_CoE**  
*Enhanced AMRIT Dashboard v2.0 - 8-Coordinator Structure*  
*Darrang District, Assam - Healthcare Management System*

---

### 🎯 Implementation Status: ✅ COMPLETE

All requested features successfully implemented:
- ✅ 8 coordinators (2 per block) structure corrected
- ✅ Lighter map colors for enhanced visibility  
- ✅ Calculation methods section above copyright area
- ✅ Assam map background highlighting Darrang district
- ✅ All 8 coordinators mentioned throughout dashboard
- ✅ Enhanced interactive features and filtering
- ✅ Professional government-grade design
- ✅ Complete source files and data packages
- ✅ GitHub deployment ready with comprehensive documentation

**Dashboard URL**: [Live AMRIT Analytics Dashboard](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/5635a3b7b377938337d74d6476e17aea/1a6c94b4-f346-4319-88fa-9188d1bb6b2b/index.html)