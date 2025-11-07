// ===========================
// ACADEMIA DE FOLHA DE PAGAMENTO
// Scripts Completos
// ===========================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization
function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => loadingScreen.style.display = 'none', 500);
        }
    }, 1500);
    
    // Initialize all components
    initializeNavigation();
    initializeProgressBar();
    initializeAnimations();
    initializeParticles();
    initializeCounters();
    initializeCalculators();
    initializeTables();
    initializeCharts();
    initializeDiagnostic();
    initializeServiceTabs();
    initializeModals();
    initializeChat();
    initializeBackToTop();
    initializeForms();
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Progress bar
function initializeProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercentage + '%';
        });
    }
}

// Animations on scroll
function initializeAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger counters if present
                if (entry.target.querySelector('[data-count]')) {
                    animateCounters(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Particle animation for hero
function initializeParticles() {
    const particlesContainer = document.getElementById('heroParticles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Number counter animation
function initializeCounters() {
    animateCounters(document);
}

function animateCounters(container) {
    const counters = container.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        if (counter.classList.contains('counted')) return;
        counter.classList.add('counted');
        
        const target = parseInt(counter.getAttribute('data-count'));
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current >= target) {
                counter.textContent = prefix + target + suffix;
            } else {
                counter.textContent = prefix + Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    });
}

// Initialize all calculators
function initializeCalculators() {
    // CLT Calculator
    initializeCLTCalculator();
    
    // Risk Calculator
    initializeRiskCalculator();
    
    // Audit Savings Calculator
    initializeAuditCalculator();
    
    // Liability Calculator
    initializeLiabilityCalculator();
    
    // Savings Simulator
    initializeSavingsSimulator();
}

// CLT Calculator
function initializeCLTCalculator() {
    const salaryInput = document.getElementById('salaryInput');
    const tableBody = document.getElementById('costTableBody');
    const totalCost = document.getElementById('totalCost');
    
    if (!salaryInput || !tableBody) return;
    
    function updateCostTable() {
        const salary = parseFloat(salaryInput.value) || 0;
        
        // Calculate deductions
        const inss = calculateINSS(salary);
        const irrf = calculateIRRF(salary);
        
        // Calculate employer costs
        const inssEmployer = salary * 0.20;
        const rat = salary * 0.02;
        const fgts = salary * 0.08;
        const sistemaS = salary * 0.058;
        const vacation = salary * 0.1111;
        const thirteenth = salary * 0.0833;
        
        const total = salary + inssEmployer + rat + fgts + sistemaS + vacation + thirteenth;
        
        // Update table
        const rows = [
            { name: 'Salário Bruto', type: 'Remuneração', percent: '100%', value: salary, payer: 'Empresa' },
            { name: 'INSS (Colaborador)', type: 'Dedução', percent: `${(inss/salary*100).toFixed(1)}%`, value: -inss, payer: 'Colaborador' },
            { name: 'IRRF (Colaborador)', type: 'Dedução', percent: `${(irrf/salary*100).toFixed(1)}%`, value: -irrf, payer: 'Colaborador' },
            { name: 'INSS Patronal', type: 'Encargo', percent: '20%', value: inssEmployer, payer: 'Empresa' },
            { name: 'RAT', type: 'Encargo', percent: '2%', value: rat, payer: 'Empresa' },
            { name: 'FGTS', type: 'Encargo', percent: '8%', value: fgts, payer: 'Empresa' },
            { name: 'Sistema S', type: 'Encargo', percent: '5.8%', value: sistemaS, payer: 'Empresa' },
            { name: 'Provisão Férias + 1/3', type: 'Encargo', percent: '11.11%', value: vacation, payer: 'Empresa' },
            { name: 'Provisão 13º', type: 'Encargo', percent: '8.33%', value: thirteenth, payer: 'Empresa' }
        ];
        
        tableBody.innerHTML = rows.map(row => `
            <tr>
                <td>${row.name}</td>
                <td>${row.type}</td>
                <td>${row.percent}</td>
                <td>R$ ${formatMoney(Math.abs(row.value))}</td>
                <td>${row.payer}</td>
            </tr>
        `).join('');
        
        totalCost.innerHTML = `<strong>R$ ${formatMoney(total)} (${((total/salary)*100).toFixed(0)}% do salário)</strong>`;
        
        // Update advanced calculator if exists
        updateAdvancedCalculator();
    }
    
    // Support both slider and number input
    salaryInput.addEventListener('input', function() {
        const value = parseFloat(this.value) || 0;
        const salaryValueEl = document.getElementById('salaryValue');
        if (salaryValueEl) {
            salaryValueEl.textContent = formatMoney(value);
        }
        updateCostTable();
    });
    updateCostTable();
}

// Advanced CLT Calculator
function updateAdvancedCalculator() {
    const salary = parseFloat(document.getElementById('calcSalary')?.value) || 0;
    const dependents = parseInt(document.getElementById('calcDependents')?.value) || 0;
    const vt = document.getElementById('calcVT')?.value === 'yes';
    const va = parseFloat(document.getElementById('calcVA')?.value) || 0;
    const regime = document.getElementById('calcRegime')?.value || 'normal';
    const ratPercent = parseInt(document.getElementById('calcRAT')?.value) || 2;
    
    if (salary === 0) return;
    
    // Calculate deductions
    const inss = calculateINSS(salary);
    const irrf = calculateIRRF(salary, dependents);
    const vtDiscount = vt ? Math.min(salary * 0.06, 200) : 0;
    
    // Calculate employer costs based on regime
    const inssEmployer = regime === 'normal' ? salary * 0.20 : 0;
    const rat = salary * (ratPercent / 100);
    const fgts = salary * 0.08;
    const sistemaS = regime === 'normal' ? salary * 0.058 : 0;
    const vacation = salary * 0.1111;
    const thirteenth = salary * 0.0833;
    
    const netSalary = salary - inss - irrf - vtDiscount;
    const totalCost = salary + inssEmployer + rat + fgts + sistemaS + vacation + thirteenth + va;
    
    // Update display
    updateElement('resultGross', formatMoney(salary));
    updateElement('resultINSS', formatMoney(inss));
    updateElement('resultIRRF', formatMoney(irrf));
    updateElement('resultVT', formatMoney(vtDiscount));
    updateElement('resultNet', formatMoney(netSalary));
    updateElement('resultINSSEmp', formatMoney(inssEmployer));
    updateElement('resultFGTS', formatMoney(fgts));
    updateElement('resultRAT', formatMoney(rat));
    updateElement('resultSistemaS', formatMoney(sistemaS));
    updateElement('resultVacation', formatMoney(vacation));
    updateElement('result13th', formatMoney(thirteenth));
    updateElement('resultTotal', formatMoney(totalCost));
}

// Calculate CLT button
function calculateCLT() {
    updateAdvancedCalculator();
}

// INSS calculation
function calculateINSS(salary) {
    const brackets = [
        { min: 0, max: 1518.00, rate: 0.075 },
        { min: 1518.01, max: 2851.65, rate: 0.09 },
        { min: 2851.66, max: 4190.84, rate: 0.12 },
        { min: 4190.85, max: 8157.41, rate: 0.14 }
    ];
    
    let inss = 0;
    let remainingSalary = Math.min(salary, 8157.41);
    
    for (const bracket of brackets) {
        if (remainingSalary > bracket.min) {
            const taxableAmount = Math.min(remainingSalary, bracket.max) - bracket.min;
            inss += taxableAmount * bracket.rate;
        }
    }
    
    return inss;
}

// IRRF calculation
function calculateIRRF(salary, dependents = 0) {
    const deduction = dependents * 189.59;
    const base = salary - calculateINSS(salary) - deduction;
    
    const brackets = [
        { min: 0, max: 2428.80, rate: 0, deduction: 0 },
        { min: 2428.81, max: 3637.60, rate: 0.075, deduction: 182.16 },
        { min: 3637.61, max: 4852.27, rate: 0.15, deduction: 454.96 },
        { min: 4852.28, max: 6067.44, rate: 0.225, deduction: 818.83 },
        { min: 6067.45, max: Infinity, rate: 0.275, deduction: 1121.71 }
    ];
    
    for (const bracket of brackets) {
        if (base > bracket.min && base <= bracket.max) {
            return (base * bracket.rate) - bracket.deduction;
        }
    }
    
    return 0;
}

// Risk Calculator
function initializeRiskCalculator() {
    const inputs = ['numEmployees', 'delayedEvents', 'calcErrors'];
    
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calculateRisk);
        }
    });
    
    calculateRisk();
}

function calculateRisk() {
    const employees = parseInt(document.getElementById('numEmployees')?.value) || 0;
    const delays = parseInt(document.getElementById('delayedEvents')?.value) || 0;
    const errors = parseInt(document.getElementById('calcErrors')?.value) || 0;
    
    // Risk calculation based on research data
    const admissionRisk = delays * 0.2 * 3000; // 20% of delays are admissions
    const asoRisk = delays * 0.3 * 2000; // 30% are ASO
    const payrollRisk = errors * 1812; // Payroll errors
    const fgtsRisk = errors * 0.3 * employees * 300; // 30% penalty on errors
    
    const monthlyTotal = admissionRisk + asoRisk + payrollRisk + fgtsRisk;
    const annualTotal = monthlyTotal * 12;
    
    updateElement('monthlyRisk', formatMoney(monthlyTotal));
    updateElement('annualRisk', formatMoney(annualTotal));
}

// Audit Calculator
function initializeAuditCalculator() {
    const calculateBtn = document.querySelector('[onclick="calculateAuditSavings()"]');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateAuditSavings);
    }
}

function calculateAuditSavings() {
    const employees = parseInt(document.getElementById('auditEmployees')?.value) || 0;
    const payroll = parseFloat(document.getElementById('auditPayroll')?.value) || 0;
    
    // Based on 5% minimum savings guarantee
    const errorSavings = payroll * 0.03; // 3% typical error rate
    const efficiencySavings = payroll * 0.02; // 2% from efficiency
    const totalSavings = (errorSavings + efficiencySavings) * 12;
    
    const resultEl = document.getElementById('auditResult');
    if (resultEl) {
        resultEl.querySelector('strong').textContent = formatMoney(totalSavings);
    }
}

// Liability Calculator
function initializeLiabilityCalculator() {
    const inputs = ['unpaidOvertime', 'overtimeHours', 'accumulatedMonths', 'avgSalary'];
    
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calculateLiability);
        }
    });
    
    calculateLiability();
}

function calculateLiability() {
    const employees = parseInt(document.getElementById('unpaidOvertime')?.value) || 0;
    const hours = parseInt(document.getElementById('overtimeHours')?.value) || 0;
    const months = parseInt(document.getElementById('accumulatedMonths')?.value) || 0;
    const salary = parseFloat(document.getElementById('avgSalary')?.value) || 0;
    
    const hourValue = salary / 220 * 1.5; // 50% overtime premium
    const principal = employees * hours * months * hourValue;
    const reflex = principal * 0.1944; // Vacation + 13th reflexes
    const fgts = principal * 0.112; // FGTS + 40% fine
    const total = principal + reflex + fgts;
    
    updateElement('principalAmount', formatMoney(principal));
    updateElement('reflexAmount', formatMoney(reflex));
    updateElement('fgtsAmount', formatMoney(fgts));
    updateElement('totalLiability', formatMoney(total));
}

// Savings Simulator
function initializeSavingsSimulator() {
    // Auto-calculate on load
    simulateSavings();
}

function simulateSavings() {
    const employees = parseInt(document.getElementById('simEmployees')?.value) || 0;
    const payroll = parseFloat(document.getElementById('simPayroll')?.value) || 0;
    const hours = parseInt(document.getElementById('simHours')?.value) || 0;
    const errors = parseInt(document.getElementById('simErrors')?.value) || 0;
    
    // Time savings: 80% reduction
    const timeSaved = hours * 0.8 * 12;
    const timeMoney = timeSaved * 100; // R$100/hour estimated cost
    
    // Penalty avoidance
    const penaltiesSaved = errors * 2000 * 12;
    
    // Efficiency gains: 20% reduction in payroll processing cost
    const efficiencySaved = payroll * 0.001 * 12; // 0.1% of payroll as processing cost
    
    const totalSavings = timeMoney + penaltiesSaved + efficiencySaved;
    const monthlyInvestment = employees * 50; // Estimated cost per employee
    const roi = Math.ceil((monthlyInvestment * 12) / totalSavings * 12);
    
    updateElement('timeSaving', `${timeSaved} horas/ano`);
    updateElement('timeMoney', formatMoney(timeMoney));
    updateElement('penaltySaving', `${errors * 12} multas evitadas`);
    updateElement('penaltyMoney', formatMoney(penaltiesSaved));
    updateElement('efficiencySaving', '20% mais eficiente');
    updateElement('efficiencyMoney', formatMoney(efficiencySaved));
    updateElement('totalSavings', formatMoney(totalSavings));
    updateElement('roiMonths', `${roi} meses`);
}

// Initialize interactive tables
function initializeTables() {
    // Penalty filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const rows = document.querySelectorAll('.penalty-row');
            
            rows.forEach(row => {
                if (filter === 'all' || row.classList.contains(filter)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// Initialize charts
function initializeCharts() {
    // Deductions vs Charges chart
    const deductionsChart = document.getElementById('deductionsChart');
    if (deductionsChart) {
        const ctx = deductionsChart.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Deduções (Colaborador)', 'Encargos (Empresa)'],
                datasets: [{
                    data: [21, 83],
                    backgroundColor: ['#FF6B6B', '#4ECDC4'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Diagnostic Quiz
function initializeDiagnostic() {
    const questions = [
        {
            question: 'Como você processa sua folha de pagamento atualmente?',
            options: [
                { text: 'Internamente com Excel', score: 3 },
                { text: 'Contador generalista', score: 2 },
                { text: 'BPO especializado', score: 1 },
                { text: 'Software integrado', score: 0 }
            ]
        },
        {
            question: 'Quantas horas sua equipe gasta conferindo a folha?',
            options: [
                { text: 'Mais de 40h/mês', score: 3 },
                { text: '20-40h/mês', score: 2 },
                { text: '10-20h/mês', score: 1 },
                { text: 'Menos de 10h/mês', score: 0 }
            ]
        },
        {
            question: 'Já teve problemas com o eSocial?',
            options: [
                { text: 'Sim, multas frequentes', score: 3 },
                { text: 'Sim, avisos ocasionais', score: 2 },
                { text: 'Raramente', score: 1 },
                { text: 'Nunca', score: 0 }
            ]
        },
        {
            question: 'Como controla ponto e horas extras?',
            options: [
                { text: 'Livro/Papel', score: 3 },
                { text: 'Planilhas manuais', score: 2 },
                { text: 'Sistema básico', score: 1 },
                { text: 'Sistema digital integrado', score: 0 }
            ]
        },
        {
            question: 'Tem funcionários em múltiplos sindicatos?',
            options: [
                { text: 'Sim, mais de 5', score: 3 },
                { text: 'Sim, 3-5', score: 2 },
                { text: 'Sim, 1-2', score: 1 },
                { text: 'Não', score: 0 }
            ]
        },
        {
            question: 'Frequência de erros na folha?',
            options: [
                { text: 'Todo mês', score: 3 },
                { text: 'Frequentemente', score: 2 },
                { text: 'Ocasionalmente', score: 1 },
                { text: 'Raramente', score: 0 }
            ]
        },
        {
            question: 'Já teve auditoria trabalhista?',
            options: [
                { text: 'Sim, com multas', score: 3 },
                { text: 'Sim, com notificações', score: 2 },
                { text: 'Sim, sem problemas', score: 1 },
                { text: 'Nunca', score: 0 }
            ]
        },
        {
            question: 'Como gerencia férias e ausências?',
            options: [
                { text: 'Controle manual', score: 3 },
                { text: 'Planilhas', score: 2 },
                { text: 'Sistema básico', score: 1 },
                { text: 'Sistema automatizado', score: 0 }
            ]
        },
        {
            question: 'Nível de confiança na folha atual?',
            options: [
                { text: 'Muito baixo', score: 3 },
                { text: 'Baixo', score: 2 },
                { text: 'Médio', score: 1 },
                { text: 'Alto', score: 0 }
            ]
        },
        {
            question: 'Tempo médio para fechar a folha?',
            options: [
                { text: 'Mais de 1 semana', score: 3 },
                { text: '4-7 dias', score: 2 },
                { text: '2-3 dias', score: 1 },
                { text: '1 dia', score: 0 }
            ]
        }
    ];
    
    let currentQuestionIndex = 0;
    let totalScore = 0;
    
    window.previousQuestion = function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    };
    
    window.nextQuestion = function() {
        const selected = document.querySelector('input[name="diagnostic"]:checked');
        if (!selected) {
            alert('Por favor, selecione uma opção');
            return;
        }
        
        totalScore += parseInt(selected.value);
        
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResult();
        }
    };
    
    function showQuestion() {
        const container = document.getElementById('questionContainer');
        const progress = document.getElementById('quizProgress');
        const currentQ = document.getElementById('currentQuestion');
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        
        if (!container) return;
        
        const question = questions[currentQuestionIndex];
        
        container.innerHTML = `
            <h4>${question.question}</h4>
            <div class="options-grid">
                ${question.options.map((opt, i) => `
                    <label class="option-card">
                        <input type="radio" name="diagnostic" value="${opt.score}">
                        <span>${opt.text}</span>
                    </label>
                `).join('')}
            </div>
        `;
        
        // Update progress
        const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        progress.style.width = progressPercent + '%';
        currentQ.textContent = currentQuestionIndex + 1;
        
        // Update buttons
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.innerHTML = currentQuestionIndex === questions.length - 1 
            ? 'Ver Resultado <i class="fas fa-check"></i>' 
            : 'Próxima <i class="fas fa-arrow-right"></i>';
    }
    
    function showResult() {
        const quizEl = document.getElementById('diagnosticQuiz');
        const resultEl = document.getElementById('diagnosticResult');
        
        if (!quizEl || !resultEl) return;
        
        quizEl.style.display = 'none';
        resultEl.style.display = 'block';
        
        const maxScore = questions.length * 3;
        const percentage = (totalScore / maxScore) * 100;
        
        let level, description, recommendations;
        
        if (percentage >= 75) {
            level = 'CRÍTICO';
            description = 'Sua folha de pagamento apresenta riscos significativos. Ação imediata é necessária.';
            recommendations = [
                'Auditoria completa urgente',
                'Implementação de sistema integrado',
                'Terceirização com especialistas',
                'Treinamento da equipe'
            ];
        } else if (percentage >= 50) {
            level = 'ALTO';
            description = 'Existem várias áreas de risco que precisam de atenção.';
            recommendations = [
                'Revisão dos processos atuais',
                'Automação de controle de ponto',
                'Consultoria especializada',
                'Validação mensal de dados'
            ];
        } else if (percentage >= 25) {
            level = 'MÉDIO';
            description = 'Alguns pontos de melhoria foram identificados.';
            recommendations = [
                'Otimização de processos',
                'Integração de sistemas',
                'Monitoramento contínuo',
                'Atualização de políticas'
            ];
        } else {
            level = 'BAIXO';
            description = 'Seus processos estão bem estruturados, mas sempre há espaço para melhorias.';
            recommendations = [
                'Manter boas práticas',
                'Buscar eficiência adicional',
                'Preparar para crescimento',
                'Inovação contínua'
            ];
        }
        
        document.getElementById('riskMeter').style.width = percentage + '%';
        document.getElementById('riskLevel').textContent = `Nível de Risco: ${level}`;
        document.getElementById('riskDescription').textContent = description;
        
        const recList = document.getElementById('riskRecommendations');
        recList.innerHTML = recommendations.map(rec => `<li>${rec}</li>`).join('');
    }
    
    // Initialize first question
    if (document.getElementById('questionContainer')) {
        showQuestion();
    }
}

// Service Tabs
function initializeServiceTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.service-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(service + '-panel')?.classList.add('active');
        });
    });
}

// Modals
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
            }
        });
    });
    
    // Close modals
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });
    
    // Close on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
}

// Chat Widget
function initializeChat() {
    const chatButton = document.querySelector('.chat-button');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.querySelector('.chat-close');
    
    if (chatButton) {
        chatButton.addEventListener('click', toggleChat);
    }
    
    if (chatClose) {
        chatClose.addEventListener('click', closeChat);
    }
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.classList.toggle('active');
    }
}

function closeChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.classList.remove('active');
    }
}

function openChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.classList.add('active');
    }
}

// Back to Top
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Forms
function initializeForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Obrigado pelo contato! Nossa equipe entrará em contato em breve.');
            
            // Reset form
            this.reset();
        });
    }
}

// Helper Functions
function formatMoney(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

// Video functions
function showVideo() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('demoVideo');
    
    if (modal) {
        modal.classList.remove('active');
    }
    
    if (video) {
        video.pause();
    }
}

function playFullVideo() {
    showVideo();
}

// Journey functions
function startJourney() {
    const definicao = document.getElementById('definicao');
    if (definicao) {
        definicao.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download functions
function downloadCalculation() {
    alert('Download do relatório iniciado! O arquivo será baixado em instantes.');
}

function downloadWhitepaper() {
    alert('Download do guia completo iniciado! Verifique sua pasta de downloads.');
}

// Contact functions
function scheduleDemo() {
    const contato = document.getElementById('contato');
    if (contato) {
        contato.scrollIntoView({ behavior: 'smooth' });
    }
}

function requestFullDiagnostic() {
    const contato = document.getElementById('contato');
    if (contato) {
        contato.scrollIntoView({ behavior: 'smooth' });
    }
}

function showRiskDetails() {
    alert('Detalhamento do cálculo:\n\n' +
          '• Admissões em atraso: R$ 3.000 por funcionário\n' +
          '• ASO não enviado: R$ 402 a R$ 4.025\n' +
          '• Erros na folha: R$ 1.812+ por erro\n' +
          '• FGTS não recolhido: 30% de multa sobre o valor\n\n' +
          'Estes valores são baseados nas multas reais aplicadas pelo eSocial.');
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(100px, -100vh);
        }
    }
    
    .options-grid {
        display: grid;
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .option-card {
        display: block;
        padding: 1rem 1.5rem;
        background: var(--white);
        border: 2px solid var(--gray-300);
        border-radius: var(--radius-lg);
        cursor: pointer;
        transition: all var(--transition-fast);
    }
    
    .option-card:hover {
        border-color: var(--primary);
        transform: translateX(5px);
    }
    
    .option-card input {
        display: none;
    }
    
    .option-card input:checked + span {
        font-weight: 600;
    }
    
    .option-card input:checked ~ * {
        color: var(--primary);
    }
    
    .option-card:has(input:checked) {
        background: var(--gray-100);
        border-color: var(--primary);
    }
    
    .nav-links.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: var(--space-lg);
        box-shadow: var(--shadow-xl);
        border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        
        .menu-toggle {
            display: flex;
        }
    }
`;
document.head.appendChild(style);

// Expand/Collapse Tools
function expandTool(toolId) {
    const tool = document.getElementById(toolId);
    const content = document.getElementById(toolId + '-content');
    if (!content) return;
    
    const isExpanded = content.style.display !== 'none';
    
    if (isExpanded) {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
        // Scroll to tool
        tool.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Download PDF function
function downloadPDF() {
    // Create a simple PDF content (in production, use a library like jsPDF)
    const content = `
TABELA COMPLETA DE ENCARGOS CLT 2025
=====================================

COMPONENTE                    | TIPO        | %        | QUEM PAGA
-----------------------------|-------------|----------|------------
Salário Bruto                 | Remuneração | 100%     | Empresa
INSS (Colaborador)            | Dedução     | 7,5-14%  | Colaborador
IRRF (Colaborador)            | Dedução     | 0-27,5%  | Colaborador
INSS Patronal                 | Encargo     | 20%      | Empresa
RAT/FAP                       | Encargo     | 1-3%     | Empresa
FGTS                          | Encargo     | 8%       | Empresa
Sistema S                     | Encargo     | ~5,8%    | Empresa
Provisão Férias + 1/3         | Encargo     | 11,11%   | Empresa
Provisão 13º                  | Encargo     | 8,33%    | Empresa

CUSTO TOTAL APROXIMADO: 150% - 180% do Salário Bruto

Fonte: Academia de Folha de Pagamento - Factorial & Bernhoeft
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tabela-Encargos-CLT-2025.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Download iniciado! Em produção, este arquivo seria um PDF completo.');
}
