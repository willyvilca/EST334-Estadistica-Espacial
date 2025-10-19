/* ========================================
   PORTAFOLIO EST334 - JAVASCRIPT
   Interactividad y animaciones
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVEGACIÓN ACTIVA ========== 
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-link');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.sidebar-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();
    
    // ========== SISTEMA DE TABS ========== 
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            
            // Remover activo de todos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Activar el seleccionado
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // ========== ANIMACIÓN DE ENTRADA ========== 
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animar elementos
    const animatedElements = document.querySelectorAll('.project-item, .stat-card, .info-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ========== SMOOTH SCROLL ========== 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('🎓 Portafolio EST334 cargado correctamente');
    console.log('✨ Diseño original por Claude');
});

/* ========================================
   INSTRUCCIONES PARA AGREGAR PROYECTOS
   ======================================== */

// Para agregar un nuevo proyecto, copia este HTML en el tab-content correspondiente:

/*
<div class="project-item">
    <div class="project-date">DD MMM YYYY</div>
    <div class="project-card">
        <div class="project-number">04</div>
        <h3 class="project-title">Título del Proyecto</h3>
        <p class="project-desc">Descripción breve del proyecto y metodología utilizada.</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
            <span class="tag">Tag3</span>
        </div>
        <div class="project-actions">
            <a href="documentos/unidad1/archivo.pdf" class="action-link pdf" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
                Ver PDF
            </a>
            <a href="documentos/unidad1/codigo.R" class="action-link code" download>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                </svg>
                Código R
            </a>
        </div>
    </div>
</div>
*/