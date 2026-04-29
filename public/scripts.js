// ================================================================
// DATOS DE LOS CAMIONES
// ================================================================
const camionesData = {
    camion1: {
        title: "Camionetas",
        image: "imageWEB/rabon/rabon1.png",
        images: [  // ← Carrusel imagenes
            "imageWEB/rabon/rabon1.png",
            "imageWEB/rabon/rabon2.png",
        ],
        description: "Vehículo ideal para entregas urbanas y carga mediana. Contamos desde camionetas desde capacidad de carga de 1 Ton. hasta diferentes capacidades de carga, contamos con caja seca, plataforma y redilas. Servicios disponibles por flete, en renta con operador, en renta sin operador y caja seca para almacenaje por día o por mes ",
        specs: {
            "Capacidad": "1-3.5 Toneladas",
            "Volumen": "18 metros cúbicos",
            "Combustible": "Diésel",
            "Dimensiones": "6.5m x 2.4m x 2.6m",
            "Año": "2022-2023"
        },
        features: [
            "GPS con rastreo en tiempo real",
            "Caja cerrada con cortina",
            "Sistema de sujeción de carga",
            "Disponibilidad inmediata",
            "Monitoreo 24/7"
        ]
    },
    camion2: {
        title: "Torton",
        image: "imageWEB/torton/torton1.png",
        images: [  // ← Carrusel imagenes
            "imageWEB/torton/torton1.png",
            "imageWEB/torton/torton2.png",
            "imageWEB/torton/torton3.png",
            "imageWEB/torton/torton5.png",
            "imageWEB/torton/torton9.png",
            "imageWEB/torton/torton4.png",
        ],
        description: "Unidad especializada para cargas de hasta 15 Ton. Ideal para transporte regional con gran capacidad de carga, manejamos unidades con maniobra de carga y descarga. Contamos con caja seca cerrada, plataforma abierta, volteo, granel y jaula, al igual que equipo de descarga tanto rampo hidráulica y manual. Mercancia que transportamos, carga general paletizada, productos industriales, materiales de contruccion, alimentos a granel y carga genera",
        specs: {
            "Capacidad": "15 Toneladas",
            "Volumen": "28 metros cúbicos",
            "Combustible": "Diésel",
            "Dimensiones": "7.5m x 2.5m x 2.8m",
            "Año": "2023"
        },
        features: [
            "GPS tracking avanzado",
            "Plataformas abiertas",
            "GPS tracking",
            "Maniobras especiales para carga y descarga",
            "Sistema de anclaje múltiple",
        ]
    },
    camion3: {
        title: "Trailers",
        image: "imageWEB/trailer/trailer1.png",
        images: [  // ← carrusel imagenes
            "imageWEB/trailer/trailer1.png",
            "imageWEB/trailer/trailer2.png",
            "imageWEB/trailer/trailer3.png",
            "imageWEB/trailer/trailer4.png",
            "imageWEB/trailer/trailer5.png",
            "imageWEB/trailer/trailer6.png",
            "imageWEB/trailer/trailer7.png",
            "imageWEB/trailer/trailer8.png",
            "imageWEB/trailer/trailer9.png",
            "imageWEB/trailer/trailer10.png",
            "imageWEB/trailer/trailer11.png",
            "imageWEB/trailer/trailer12.png",
            "imageWEB/trailer/trailer13.png",
            "imageWEB/trailer/trailer14.png",
            "imageWEB/trailer/trailer15.png",
            "imageWEB/trailer/trailer16.png",
            "imageWEB/trailer/trailer17.png",
            "imageWEB/trailer/trailer18.png"
        ],
        description: "Vehículo para carga pesada y transportes de larga distancia. Equipado con todas las comodidades para rutas extensas. Contamos con semirremolques seco, caja cerrada, plataforma, cama baja, tolva, granel, tanque y portacontenedor",
        specs: {
            "Capacidad": "20 Toneladas",
            "Volumen": "90 metros cúbicos",
            "Combustible": "Diésel",
            "Longitud": "16.5-20 metros",
            "Ejes": "2-3 ejes"
        },
        features: [
            "Suspensión neumática",
            "Frenos ABS",
            "GPS con geocercas",
            "variedad de unidades para diferentes tipos de carga",
            "Alta capacidad de carga"
        ]
    }
};

// ================================================================
// FUNCIÓN PARA CREAR MODAL DE ZOOM
// ================================================================
function crearModalZoom() {
    // Verificar si ya existe
    if (document.getElementById('modalZoomFlota')) return;
    
    const modal = document.createElement('div');
    modal.id = 'modalZoomFlota';
    modal.innerHTML = `
        <div class="modal-zoom-overlay-flota"></div>
        <div class="modal-zoom-contenedor-flota">
            <button class="modal-zoom-cerrar-flota">✕</button>
            <div class="modal-zoom-imagen-area">
                <img class="modal-zoom-img" src="" alt="">
            </div>
            <div class="modal-zoom-info-flota">
                <h3 class="modal-zoom-titulo"></h3>
                <p class="modal-zoom-desc"></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Agregar estilos
    const styles = `
        <style>
            #modalZoomFlota {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
            }
            
            #modalZoomFlota.activo {
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeInModal 0.3s ease;
            }
            
            .modal-zoom-overlay-flota {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
            }
            
            .modal-zoom-contenedor-flota {
                position: relative;
                background: white;
                border-radius: 15px;
                max-width: 800px;
                width: 90%;
                max-height: 85vh;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                animation: zoomInModal 0.4s ease;
            }
            
            .modal-zoom-cerrar-flota {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 45px;
                height: 45px;
                background: #e74c3c;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
            
            .modal-zoom-cerrar-flota:hover {
                background: #c0392b;
                transform: rotate(90deg);
            }
            
            .modal-zoom-imagen-area {
                background: #f8f9fa;
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 300px;
            }
            
            .modal-zoom-img {
                max-width: 100%;
                max-height: 450px;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            .modal-zoom-info-flota {
                padding: 15px 30px;
                background: white;
            }
            
            .modal-zoom-titulo {
                color: #2c3e50;
                font-size: 1.6rem;
                margin-bottom: 12px;
                font-weight: 700;
            }
            
            .modal-zoom-desc {
                color: #666;
                line-height: 1.7;
                margin: 0;
                font-size: 1.05rem;
                text-align: justify;
            }
            
            @keyframes fadeInModal {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes zoomInModal {
                from {
                    opacity: 0;
                    transform: scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            @media (max-width: 768px) {
                .modal-zoom-contenedor-flota {
                    width: 95%;
                    max-height: 90vh;
                }
                
                .modal-zoom-imagen-area {
                    padding: 15px;
                    min-height: 250px;
                }
                
                .modal-zoom-img {
                    max-height: 300px;
                }
                
                .modal-zoom-info-flota {
                    padding: 20px;
                }
                
                .modal-zoom-titulo {
                    font-size: 1.3rem;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// ================================================================
// FUNCIÓN PARA CREAR MODAL DE ESPECIFICACIONES
// ================================================================
function crearModalEspecificaciones() {
    if (document.getElementById('modalEspecsFlota')) return;
    
    const modal = document.createElement('div');
    modal.id = 'modalEspecsFlota';
    modal.innerHTML = `
        <div class="modal-specs-overlay-flota"></div>
        <div class="modal-specs-contenedor-flota">
            <button class="modal-specs-cerrar-flota">✕</button>
            
            <div class="modal-specs-header-flota">
                <h2 class="modal-specs-titulo-flota"></h2>
            </div>
            
            <div class="modal-specs-cuerpo-flota">
                <div class="modal-specs-izquierda">
    <div class="carousel-container-specs">
        <button class="carousel-btn-specs carousel-prev-specs">
            <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="carousel-images-specs">
            <img class="modal-specs-imagen active" src="" alt="">
        </div>
        
        <button class="carousel-btn-specs carousel-next-specs">
            <i class="fas fa-chevron-right"></i>
        </button>
        
        <div class="carousel-indicators-specs"></div>
    </div>
</div>
                
                <div class="modal-specs-derecha">
                    <p class="modal-specs-descripcion"></p>
                    
                    <h3><i class="fas fa-cogs"></i> Especificaciones Técnicas</h3>
                    <div class="modal-specs-grid-flota"></div>
                    
                    <h3><i class="fas fa-check-circle"></i> Características</h3>
                    <ul class="modal-specs-lista-flota"></ul>
                </div>
            </div>
            
            <div class="modal-specs-footer-flota">
                <button class="btn-cotizar-flota">
                    💰 Cotizar este vehículo
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const styles = `
        <style>
            #modalEspecsFlota {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
            }
            
            #modalEspecsFlota.activo {
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeInModal 0.3s ease;
            }
            
            .modal-specs-overlay-flota {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
            }
            
            .modal-specs-contenedor-flota {
                position: relative;
                background: white;
                border-radius: 20px;
                max-width: 1100px;
                width: 95%;
                max-height: 92vh;
                overflow: hidden;
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
                animation: slideUpModal 0.4s ease;
            }
            
            .modal-specs-cerrar-flota {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 45px;
                height: 45px;
                background: #e74c3c;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
                font-weight: bold;
            }
            
            .modal-specs-cerrar-flota:hover {
                background: #c0392b;
                transform: rotate(90deg);
            }
            
            .modal-specs-header-flota {
                background: linear-gradient(135deg, #2c3e50, #34495e);
                color: white;
                padding: 15px 30px;
            }
            
            .modal-specs-titulo-flota {
                margin: 0;
                font-size: 1.9rem;
                font-weight: 700;
            }
            
            .modal-specs-cuerpo-flota {
                display: grid;
                grid-template-columns: 1.2fr 1fr;
                gap: 0;
                max-height: calc(90vh - 180px);
                overflow-y: auto;
            }
            
            .modal-specs-izquierda {
                background: #f8f9fa;
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 300px;
            }
            
            .modal-specs-imagen {
                max-width: 100%;
                max-height: 320px;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            }
            
            .modal-specs-derecha {
                padding: 15px 15px 30px 15px;
            }
            
            .modal-specs-descripcion {
                color: #555;
                line-height: 1.8;
                margin-bottom: 25px;
                padding-bottom: 20px;
                border-bottom: 2px solid #eee;
                font-size: 1.05rem;
                text-align: justify;
            }
            
            .modal-specs-derecha h3 {
                color: #2c3e50;
                font-size: 1.35rem;
                margin: 25px 0 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .modal-specs-derecha h3 i {
                color: #3498db;
            }
            
            .highlight-orange {
                color: #FF8C00;
            }
            
            .modal-specs-grid-flota {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-bottom: 20px;
            }
            
            .spec-item-flota {
                background: #f8f9fa;
                padding: 14px 16px;
                border-radius: 8px;
                border-left: 3px solid #3498db;
            }
            
            .spec-item-flota strong {
                display: block;
                color: #2c3e50;
                font-size: 0.92rem;
                margin-bottom: 6px;
                font-weight: 600;
            }
            
            .spec-item-flota span {
                color: #666;
                font-size: 1.02rem;
            }
            
            .modal-specs-lista-flota {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .modal-specs-lista-flota li {
                padding: 11px 0;
                display: flex;
                align-items: center;
                gap: 12px;
                border-bottom: 1px solid #f0f0f0;
                color: #555;
                font-size: 1.02rem;
            }
            
            .modal-specs-lista-flota li::before {
                content: "✓";
                color: #27ae60;
                font-weight: bold;
                font-size: 1.3rem;
                flex-shrink: 0;
            }
            
            .modal-specs-footer-flota {
                padding: 20px 30px;
                background: #f8f9fa;
                border-top: 1px solid #eee;
                text-align: center;
            }
            
            .btn-cotizar-flota {
                background: #e74c3c;
                color: white;
                border: none;
                padding: 16px 45px;
                font-size: 1.15rem;
                font-weight: 600;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .btn-cotizar-flota:hover {
                background: #c0392b;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
            }
            
            @keyframes slideUpModal {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @media (max-width: 768px) {
                .modal-specs-contenedor-flota {
                    width: 95%;
                }
                
                .modal-specs-cuerpo-flota {
                    grid-template-columns: 1fr;
                }
                
                .modal-specs-izquierda {
                    padding: 20px;
                }
                
                .modal-specs-derecha {
                    padding: 20px;
                }
                
                .modal-specs-grid-flota {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// ================================================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando sistema de flota...');
    
    // Crear modales
    crearModalZoom();
    crearModalEspecificaciones();
    
    const modalZoom = document.getElementById('modalZoomFlota');
    const modalSpecs = document.getElementById('modalEspecsFlota');
    
    // ============================================================
    // BOTONES DE ZOOM - LUPA
    // ============================================================
    const botonesZoom = document.querySelectorAll('.zoom-btn');
    console.log(`✅ Encontrados ${botonesZoom.length} botones de zoom`);
    
    botonesZoom.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🔍 Click en zoom');
            
            const card = this.closest('.fleet-card');
            const camionId = card.getAttribute('data-camion');
            const camion = camionesData[camionId];
            
            console.log('Camión seleccionado:', camionId, camion);
            
            if (!camion) {
                console.error('❌ No se encontró el camión:', camionId);
                return;
            }
            
            // Actualizar contenido
            modalZoom.querySelector('.modal-zoom-img').src = camion.image;
            modalZoom.querySelector('.modal-zoom-titulo').textContent = camion.title;
            let descriptionTextZoom = camion.description;
            // Resaltar palabras clave en naranja solo para camion1 y camion2
            if (camionId === 'camion1') {
                descriptionTextZoom = descriptionTextZoom.replace(
                    'caja seca, plataforma y redilas',
                    '<span class="highlight-orange"><strong>caja seca, plataforma y redilas</strong></span>'
                );
            } else if (camionId === 'camion2') {
                descriptionTextZoom = descriptionTextZoom.replace(
                    'caja seca cerrada, plataforma abierta, volteo, granel y jaula',
                    '<span class="highlight-orange"><strong>caja seca cerrada, plataforma abierta, volteo, granel y jaula</strong></span>'
                );
            } else if (camionId === 'camion3') {
                descriptionTextZoom = descriptionTextZoom.replace(
                    'semirremolques seco, caja cerrada, plataforma, cama baja, tolva, granel, tanque y portacontenedor',
                    '<span class="highlight-orange"><strong>semirremolques seco, caja cerrada, plataforma, cama baja, tolva, granel, tanque y portacontenedor</strong></span>'
                );
            }
            modalZoom.querySelector('.modal-zoom-desc').innerHTML = descriptionTextZoom;
            
            // Mostrar modal
            modalZoom.classList.add('activo');
            document.body.style.overflow = 'hidden';
            
            console.log('✅ Modal de zoom abierto');
        });
    });
    
    // ============================================================
    // BOTONES DE ESPECIFICACIONES
    // ============================================================
    const botonesSpecs = document.querySelectorAll('.btn-details');
    console.log(`✅ Encontrados ${botonesSpecs.length} botones de especificaciones`);
    
    botonesSpecs.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('📋 Click en especificaciones');
            
            const camionId = this.getAttribute('data-target');
            const camion = camionesData[camionId];
            
            console.log('Camión seleccionado:', camionId, camion);
            
            if (!camion) {
                console.error('❌ No se encontró el camión:', camionId);
                return;
            }
            
            // Actualizar título
            modalSpecs.querySelector('.modal-specs-titulo-flota').textContent = camion.title;
            
            // Inicializar carrusel de imágenes
            if (camion.images && camion.images.length > 0) {
               inicializarCarruselSpecs(camion.images);
            } else {
               // Fallback si no hay array de imágenes
               inicializarCarruselSpecs([camion.image]);
            }
            
            // Actualizar descripción
            let descriptionText = camion.description;
            // Resaltar palabras clave en naranja solo para camion1 y camion2
            if (camionId === 'camion1') {
                descriptionText = descriptionText.replace(
                    'caja seca, plataforma y redilas',
                    '<span class="highlight-orange"><strong>caja seca, plataforma y redilas</strong></span>'
                );
            } else if (camionId === 'camion2') {
                descriptionText = descriptionText.replace(
                    'caja seca cerrada, plataforma abierta, volteo, granel y jaula',
                    '<span class="highlight-orange"><strong>caja seca cerrada, plataforma abierta, volteo, granel y jaula</strong></span>'
                );
            } else if (camionId === 'camion3') {
                descriptionText = descriptionText.replace(
                    'semirremolques seco, caja cerrada, plataforma, cama baja, tolva, granel, tanque y portacontenedor',
                    '<span class="highlight-orange"><strong>semirremolques seco, caja cerrada, plataforma, cama baja, tolva, granel, tanque y portacontenedor</strong></span>'
                );
            }
            modalSpecs.querySelector('.modal-specs-descripcion').innerHTML = descriptionText;
            
            // Actualizar especificaciones
            const specsGrid = modalSpecs.querySelector('.modal-specs-grid-flota');
            specsGrid.innerHTML = '';
            for (const [key, value] of Object.entries(camion.specs)) {
                specsGrid.innerHTML += `
                    <div class="spec-item-flota">
                        <strong>${key}</strong>
                        <span>${value}</span>
                    </div>
                `;
            }
            
            // Actualizar características
            const featuresList = modalSpecs.querySelector('.modal-specs-lista-flota');
            featuresList.innerHTML = '';
            camion.features.forEach(feature => {
                featuresList.innerHTML += `<li>${feature}</li>`;
            });
            
            // Mostrar modal
            modalSpecs.classList.add('activo');
            document.body.style.overflow = 'hidden';
            
            console.log('✅ Modal de especificaciones abierto');
        });
    });
    
    // ============================================================
    // CERRAR MODALES
    // ============================================================
    
    // Cerrar modal de zoom
    const btnCerrarZoom = modalZoom.querySelector('.modal-zoom-cerrar-flota');
    const overlayZoom = modalZoom.querySelector('.modal-zoom-overlay-flota');
    
    btnCerrarZoom.addEventListener('click', () => {
        modalZoom.classList.remove('activo');
        document.body.style.overflow = 'auto';
        console.log('❌ Modal de zoom cerrado');
    });
    
    overlayZoom.addEventListener('click', () => {
        modalZoom.classList.remove('activo');
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar modal de especificaciones
    const btnCerrarSpecs = modalSpecs.querySelector('.modal-specs-cerrar-flota');
    const overlaySpecs = modalSpecs.querySelector('.modal-specs-overlay-flota');
    
    btnCerrarSpecs.addEventListener('click', () => {
        modalSpecs.classList.remove('activo');
        document.body.style.overflow = 'auto';
        console.log('❌ Modal de especificaciones cerrado');
    });
    
    overlaySpecs.addEventListener('click', () => {
        modalSpecs.classList.remove('activo');
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalZoom.classList.remove('activo');
            modalSpecs.classList.remove('activo');
            document.body.style.overflow = 'auto';
            console.log('❌ Modales cerrados con ESC');
        }
    });
    
    // ============================================================
    // BOTÓN DE COTIZAR
    // ============================================================
    const btnCotizar = modalSpecs.querySelector('.btn-cotizar-flota');
    btnCotizar.addEventListener('click', () => {
        const titulo = modalSpecs.querySelector('.modal-specs-titulo-flota').textContent;
        window.location.href = `contacto.html?vehiculo=${encodeURIComponent(titulo)}`;
    });
    
    console.log('✅ Sistema de flota inicializado correctamente');
});

// ================================================================
// MENÚ HAMBURGUESA
// ================================================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// ======================
// ANIMACIÓN DE STATS - 
// ======================
let statsAnimated = false;

function animateStatsCorrectly() {
    // Si ya se animó, no hacer nada
    if (statsAnimated) return;
    
    const statCards = document.querySelectorAll('.stat-card h3');
    
    statCards.forEach(stat => {
        // Guardar el texto ORIGINAL del HTML
        const originalText = stat.textContent.trim();
        
        // Extraer solo el número
        const number = parseInt(originalText.replace(/\D/g, ''));
        
        // Si no hay número válido, salir
        if (isNaN(number)) return;
        
        // Detectar si tiene + o %
        const hasPlus = originalText.includes('+');
        const hasPercent = originalText.includes('%');
        
        // Iniciar desde 0
        let current = 0;
        const increment = number / 80; // 80 pasos
        const duration = 3000; // 3 segundos
        const stepTime = duration / 80;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            // Construir el texto final
            let displayValue = Math.floor(current);
            if (hasPlus) displayValue += '+';
            if (hasPercent) displayValue += '%';
            
            stat.textContent = displayValue;
        }, stepTime);
    });
    
    statsAnimated = true;
}

// Ejecutar SOLO cuando carga la página
window.addEventListener('load', () => {
    setTimeout(animateStatsCorrectly, 600);
});
// ================================================================
// CARRUSEL DE IMÁGENES EN MODAL DE ESPECIFICACIONES
// ================================================================
function inicializarCarruselSpecs(imagenes) {
    const container = document.querySelector('.carousel-images-specs');
    const indicatorsContainer = document.querySelector('.carousel-indicators-specs');
    const btnPrev = document.querySelector('.carousel-prev-specs');
    const btnNext = document.querySelector('.carousel-next-specs');
    
    let currentIndex = 0;
    
    // Limpiar contenedor
    container.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    // Crear imágenes
    imagenes.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.classList.add('modal-specs-imagen');
        if (index === 0) imgElement.classList.add('active');
        container.appendChild(imgElement);
        
        // Crear indicador
        const indicator = document.createElement('span');
        indicator.classList.add('carousel-indicator-specs');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    const slides = container.querySelectorAll('.modal-specs-imagen');
    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator-specs');
    
    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % imagenes.length;
        goToSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        goToSlide(prevIndex);
    }
    
    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('modalEspecsFlota').classList.contains('activo')) {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        }
    });
}

// ================================================================
// ANIMACIÓN DE LA SECCIÓN "¿CÓMO FUNCIONA?"
// ================================================================
function animarTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Ejecutar cuando carga el DOM
document.addEventListener('DOMContentLoaded', animarTimeline);

// ================================================================
// PRELOADER AL HACER CLICK EN BOTONES DE NAVEGACIÓN
// ================================================================
function activarPreloaderEnClick() {
    const preloader = document.getElementById('preloader');
    
    // Seleccionar todos los botones que deben activar el preloader
    const botonesConPreloader = document.querySelectorAll(`
        a[href="Solicitar Cotización"],
        a[href="contactar Ahora"],
        a[href="Solicitar Cotización Gratis"],
        .btn-primary[href],
        .btn-secondary[href],
        .hero-buttons a
    `);
    
    botonesConPreloader.forEach(boton => {
        boton.addEventListener('click', function(e) {
            // Solo si es un enlace válido (no #)
            const href = this.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('#')) {
                // Mostrar preloader
                preloader.style.display = 'flex';
                preloader.style.opacity = '1';
                
                // Opcional: Agregar pequeño delay para que se vea el efecto
                e.preventDefault();
                setTimeout(() => {
                    window.location.href = href;
                }, 1000);
            }
        });
    });
}

// Ejecutar cuando carga el DOM
document.addEventListener('DOMContentLoaded', activarPreloaderEnClick);

// ===================================
// NOSOTROS PAGE - ADVANCED ANIMATIONS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // INTERSECTION OBSERVER - Animaciones al scroll
    // ===================================
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animar lista de características con delay
                if (entry.target.classList.contains('content-row')) {
                    const features = entry.target.querySelectorAll('.features-list li');
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.classList.add('animate');
                        }, index * 100);
                    });
                }
                
                // Animar highlights
                const highlights = entry.target.querySelectorAll('.highlight');
                highlights.forEach((highlight, index) => {
                    setTimeout(() => {
                        highlight.classList.add('animate');
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.section-title, .content-row, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // ===================================
    // CONTADOR ANIMADO CON EASING
    // ===================================
    function animateCounter(elementId, finalValue, suffix = '', duration = 2000) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const startTime = Date.now();
        const startValue = 0;
        
        // Easing function (ease-out-cubic)
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
        
        function updateCounter() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.floor(startValue + (finalValue - startValue) * easedProgress);
            
            element.textContent = currentValue.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = finalValue.toLocaleString() + suffix;
            }
        }
        
        updateCounter();
    }

    // Observar estadísticas para iniciar contadores
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateCounter('yearsCounter', 25, '+', 2000);
                }, 200);
                setTimeout(() => {
                    animateCounter('clientsCounter', 500, '+', 2500);
                }, 400);
                setTimeout(() => {
                    animateCounter('trucksCounter', 90, '+', 2000);
                }, 600);
                setTimeout(() => {
                    animateCounter('kmCounter', 25000, 'K+', 3000);
                }, 800);
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }


    // ===================================
    // EFECTO HOVER EN ESTADÍSTICAS
    // ===================================
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Añadir efecto de pulso
            const number = this.querySelector('.stat-number');
            number.style.animation = 'pulse 0.5s ease';
            
            setTimeout(() => {
                number.style.animation = '';
            }, 500);
        });
    });

    // Crear animación de pulso dinámica
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // SMOOTH SCROLL PARA ENLACES INTERNOS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // EFECTO DE PARTÍCULAS EN EL HERO
    // ===================================
   function createStarField() {
    const hero = document.querySelector('.nosotros-hero');
    if (!hero) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3;
        const duration = 1 + Math.random() * 3;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
            opacity: 0;
        `;
        
        hero.appendChild(star);
    }
}

const starStyle = document.createElement('style');
starStyle.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
    }
`;
document.head.appendChild(starStyle);

createStarField();

    // ===================================
    // EFECTO DE TYPING EN EL SUBTÍTULO (OPCIONAL)
    // ===================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Descomentar para activar efecto typing
    // const subtitle = document.querySelector('.nosotros-hero .hero-subtitle');
    // if (subtitle) {
    //     const originalText = subtitle.textContent;
    //     setTimeout(() => {
    //         typeWriter(subtitle, originalText, 30);
    //     }, 1000);
    // }

    // ===================================
    // PROGRESS BAR AL SCROLL
    // ===================================
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #1a3c6e, #e63946, #ff6b6b);
            z-index: 9999;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height);
            progressBar.style.transform = `scaleX(${scrolled})`;
            progressBar.style.width = '100%';
        });
    }
    
    createScrollProgress();

    // ===================================
    // LAZY LOADING DE IMÁGENES
    // ===================================
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.image-box-large img').forEach(img => {
        imageObserver.observe(img);
    });

    // ===================================
    // CURSOR PERSONALIZADO (OPCIONAL)
    // ===================================
    function createCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 2px solid #e63946;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease, opacity 0.2s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.8)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });
        
        // Descomentar para activar cursor personalizado
        // document.body.style.cursor = 'none';
    }
    
    // createCustomCursor();

    // ===================================
    // ANIMACIÓN DE CARGA INICIAL
    // ===================================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    console.log('✅ Nosotros Page - Animations Loaded Successfully');
});

// ========================================== //
// SISTEMA DE GALERÍA MODAL - 4 COLUMNAS
// ========================================== //

(function() {
    'use strict';
    
    console.log('🖼️ Iniciando sistema de galería modal...');
    
    // ==========================================
    // DATOS DE LAS GALERÍAS
    // ==========================================
const galleryData = {
    rabon: {
        title: 'Galería de Camiones Rabón',
        images: [
            { 
                src: 'imageWEB/rabon/rabon1.png', 
                caption: 'Camión Rabón - Lateral',
                description: 'Vista lateral completa mostrando la caja de carga cerrada de 18m³. Ideal para entregas urbanas con fácil acceso en calles estrechas.'
            },
            { 
                src: 'imageWEB/rabon/rabon2.png', 
                caption: 'Camión Rabón - Detalle',
                description: 'Detalle del sistema de cierre y seguridad de la caja. Equipado con GPS de rastreo en tiempo real para máxima seguridad de tu mercancía.'
            }
        ]
    },
    torton: {
        title: 'Galería de Camiones Tortón',
        images: [
            { 
                src: 'imageWEB/torton/torton1.png', 
                caption: 'Tortón - Frontal',
                description: 'Vista frontal del camión Tortón de 15 toneladas. Equipado con motor diésel de alto rendimiento.'
            },
            { 
                src: 'imageWEB/torton/torton2.png', 
                caption: 'Tortón - Carga Lateral',
                description: 'Sistema de carga lateral que facilita operaciones de montacargas.'
            },
            { 
                src: 'imageWEB/torton/torton3.png', 
                caption: 'Tortón - Interior de Caja',
                description: 'Piso antiderrapante y bandas de amarre para máxima protección de mercancía.'
            },
            
            { 
                src: 'imageWEB/torton/torton5.png', 
                caption: 'Tortón - En Operación',
                description: 'Unidad en ruta demostrando estabilidad y manejo en carretera. GPS tracking activo con monitoreo 24/7 de temperatura y ubicación.'
            },
            { 
                src: 'imageWEB/torton/torton9.png', 
                caption: 'Tortón - Maniobra',
                description: 'Capacidad de maniobra en espacios reducidos. Suspension neumática ajustable para adaptarse a diferentes tipos de carga y terrenos.'
            }
        ]
    },
    trailer: {
        title: 'Galería de Trailers',
        images: [
            { 
                src: 'imageWEB/trailer/trailer1.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer2.png', 
               //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer3.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer4.png', 
              //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer5.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer6.png', 
               
                //futuras descripciones para cada imagen
            },
            { 
                src: 'imageWEB/trailer/trailer7.png', 
               //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer8.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer9.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer10.png', 
                //futuras descripciones para cada imagen
               
            },
            { 
                src: 'imageWEB/trailer/trailer11.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer12.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer13.png', 
                //futuras descripciones para cada imagen
               
            },
            { 
                src: 'imageWEB/trailer/trailer14.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer15.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer16.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer17.png', 
                //futuras descripciones para cada imagen
                
            },
            { 
                src: 'imageWEB/trailer/trailer18.png', 
                //futuras descripciones para cada imagen
               
            }
        ]
    }
};
    
    // ==========================================
    // ELEMENTOS DEL DOM
    // ==========================================
    const galleryModal = document.getElementById('equipmentGalleryModal');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryModalGrid = document.getElementById('galleryModalGrid');
    const closeGalleryModal = document.getElementById('closeGalleryModal');
    const galleryOverlay = document.querySelector('.equipment-gallery-overlay');
    
    const imageLightbox = document.getElementById('galleryImageLightbox');
    const lightboxImage = document.getElementById('galleryLightboxImage');
    const lightboxCaption = document.getElementById('galleryLightboxCaption');
    const closeImageLightbox = document.getElementById('closeImageLightbox');
    
    // ==========================================
    // FUNCIÓN PARA ABRIR MODAL DE GALERÍA
    // ==========================================
    function abrirGaleria(galleryType) {
        const data = galleryData[galleryType];
        
        if (!data) {
            console.error('❌ Galería no encontrada:', galleryType);
            return;
        }
        
        console.log(`✅ Abriendo galería: ${galleryType}`);
        
        // Actualizar título
        // Determinar tipo de vehículo
let vehicleType = 'rabon';
if (galleryType === 'torton') vehicleType = 'torton';
if (galleryType === 'trailer') vehicleType = 'trailer';

// Actualizar título con estructura profesional
galleryModalTitle.setAttribute('data-vehicle', vehicleType);
galleryModalTitle.innerHTML = `
    <span class="title-text">
        <span class="title-main">${data.title.replace('Galería de ', '')}</span>
        <span class="title-sub">Galería Profesional • ${data.images.length} Imágenes</span>
    </span>
`;

// Agregar contador de imágenes si no existe
// Crear contenedor derecho si no existe
let headerRight = document.querySelector('.gallery-header-right');
if (!headerRight) {
    headerRight = document.createElement('div');
    headerRight.className = 'gallery-header-right';
    
    // Mover el botón cerrar dentro del contenedor
    const closeBtn = document.getElementById('closeGalleryModal');
    headerRight.appendChild(closeBtn);
    
    // Agregar el contenedor al header
    document.querySelector('.equipment-gallery-header').appendChild(headerRight);
}

// Crear/actualizar contador de imágenes
let imageCounter = document.querySelector('.gallery-image-count');
if (!imageCounter) {
    imageCounter = document.createElement('div');
    imageCounter.className = 'gallery-image-count';
    // Insertar ANTES del botón cerrar
    headerRight.insertBefore(imageCounter, headerRight.firstChild);
}
imageCounter.innerHTML = `
    <i class="fas fa-images"></i>
    <span class="count-number">${data.images.length}</span>
    <span>Fotos</span>
`;
        
        // Limpiar grid
        galleryModalGrid.innerHTML = '';
        
        // Crear items de galería
        data.images.forEach((imageData, index) => {
            const item = document.createElement('div');
            item.className = 'equipment-gallery-item';
            item.innerHTML = `
                <img src="${imageData.src}" alt="${imageData.caption}" loading="lazy">
                <div class="equipment-gallery-item-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>Click para ampliar</span>
                </div>
            `;
            
            // Click para abrir lightbox
            item.addEventListener('click', function() {
                abrirLightbox(imageData.src, imageData.caption, imageData.description);
      });
            
            galleryModalGrid.appendChild(item);
        });
        
        // Mostrar modal
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // ==========================================
    // FUNCIÓN PARA CERRAR MODAL DE GALERÍA
    // ==========================================
    function cerrarGaleria() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('❌ Galería cerrada');
    }
    
    // ==========================================
    // FUNCIÓN PARA ABRIR LIGHTBOX
    // ==========================================
    function abrirLightbox(src, caption, description = '') {
    lightboxImage.src = src;
    
    // Para trailers, omitir completamente el recuadro de descripción
    if (src.includes('trailer')) {
        lightboxCaption.style.display = 'none';
    } else {
        lightboxCaption.style.display = 'block';
        // Crear HTML estructurado para título y descripción
        if (description) {
            lightboxCaption.innerHTML = `
                <h4>${caption}</h4>
                <p>${description}</p>
            `;
        } else {
            lightboxCaption.innerHTML = `<h4>${caption}</h4>`;
        }
    }
    
    imageLightbox.classList.add('active');
    console.log('🔍 Lightbox abierto:', caption);
}
    
    // ==========================================
    // FUNCIÓN PARA CERRAR LIGHTBOX
    // ==========================================
    function cerrarLightbox() {
        imageLightbox.classList.remove('active');
        // Reset display del caption
        lightboxCaption.style.display = 'block';
        console.log('❌ Lightbox cerrado');
    }
    
    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    
    // Botones "Ver Galería"
    document.querySelectorAll('.btn-view-gallery').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const galleryType = this.getAttribute('data-gallery');
            abrirGaleria(galleryType);
        });
    });
    
    // Click en tarjeta completa
    document.querySelectorAll('.equipment-card-modal').forEach(card => {
        card.addEventListener('click', function() {
            const galleryType = this.getAttribute('data-equipment');
            abrirGaleria(galleryType);
        });
    });
    
    // Cerrar modal de galería
    closeGalleryModal.addEventListener('click', cerrarGaleria);
    galleryOverlay.addEventListener('click', cerrarGaleria);
    
    // Cerrar lightbox
    closeImageLightbox.addEventListener('click', cerrarLightbox);
    imageLightbox.addEventListener('click', function(e) {
        if (e.target === imageLightbox) {
            cerrarLightbox();
        }
    });
    
    // Tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (imageLightbox.classList.contains('active')) {
                cerrarLightbox();
            } else if (galleryModal.classList.contains('active')) {
                cerrarGaleria();
            }
        }
    });
    
    console.log('✅ Sistema de galería modal inicializado');
})();

// ================================================================
// COMPARATIVA DE SERVICIOS - INTERACTIVIDAD
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Inicializando comparativa de servicios...');
    
// ==========================================
// TOOLTIPS INFORMATIVOS - FIX
// ==========================================
const features = document.querySelectorAll('.feature-name');

const tooltipData = {
    'Rastreo GPS 24/7': 'Monitoreo en tiempo real de la ubicación de tu carga durante todo el trayecto',
    'Seguro de carga': 'Protección completa contra daños, pérdida o robo durante el transporte',
    'Gestión de documentación': 'Manejo de todos los papeles necesarios para el traslado legal de mercancías',
    'Carta porte digital (SCT)': 'Documento oficial requerido por la SCT para transporte de carga',
    'Carga y descarga': 'Personal especializado para el manejo seguro de tu mercancía',
    'Soporte 24/7': 'Atención personalizada disponible las 24 horas del día',
    'Alcance geográfico': 'Área de cobertura donde operamos nuestros servicios',
    'Tiempo de entrega estimado': 'Tiempo aproximado de traslado según la distancia',
    'Programación de entrega': 'Posibilidad de coordinar fecha y hora específica de entrega'
};

features.forEach(feature => {
    // Limpiar el texto para comparación
    const iconElement = feature.querySelector('i');
    let text = feature.textContent.trim();
    
    // Remover espacios extra
    text = text.replace(/\s+/g, ' ');
    
    const tooltip = tooltipData[text];
    
    if (tooltip) {
        feature.setAttribute('data-tooltip', tooltip);
        feature.style.cursor = 'help';
        
        // FIX: Asegurar que el tooltip no se corte
        feature.style.position = 'relative';
        feature.style.overflow = 'visible';
    }
});

// FIX: Ajustar posición de tooltips según columna
document.querySelectorAll('.comparison-table td[data-tooltip]').forEach(td => {
    const columnIndex = Array.from(td.parentElement.children).indexOf(td);
    const totalColumns = td.parentElement.children.length;
    
    // Si está en la última columna, ajustar a la derecha
    if (columnIndex === totalColumns - 1) {
        td.classList.add('tooltip-right');
    }
    // Si está en el medio, centrar
    else if (columnIndex > 0 && columnIndex < totalColumns - 1) {
        td.classList.add('tooltip-center');
    }
});
    // ==========================================
    // ANIMACIÓN AL SCROLL
    // ==========================================
    const comparisonSection = document.querySelector('.services-comparison');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                console.log('✅ Comparativa visible - animación activada');
            }
        });
    }, observerOptions);
    
    if (comparisonSection) {
        observer.observe(comparisonSection);
    }
    
    // ==========================================
    // HIGHLIGHT EN HOVER DE FILAS
    // ==========================================
    const tableRows = document.querySelectorAll('.comparison-table tbody tr:not(.section-divider)');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(90deg, #f8f9fa, #e9ecef)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });
    
    // ==========================================
    // CONTADORES ANIMADOS PARA NÚMEROS
    // ==========================================
    function animateNumber(element) {
        const text = element.textContent;
        const match = text.match(/(\d+)/);
        
        if (match) {
            const targetNumber = parseInt(match[1]);
            const duration = 1500;
            const startTime = Date.now();
            
            function updateNumber() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const currentNumber = Math.floor(progress * targetNumber);
                element.textContent = text.replace(/\d+/, currentNumber);
                
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    element.textContent = text;
                }
            }
            
            updateNumber();
        }
    }
    
    // Animar números cuando sean visibles
    const numberCells = document.querySelectorAll('.comparison-table td');
    const numberObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateNumber(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    numberCells.forEach(cell => {
        if (/\d+/.test(cell.textContent)) {
            numberObserver.observe(cell);
        }
    });
    
    // ==========================================
    // SCROLL HORIZONTAL SUAVE EN MÓVIL
    // ==========================================
    const tableWrapper = document.querySelector('.comparison-table');
    
    if (tableWrapper) {
        let isScrolling = false;
        let startX;
        let scrollLeft;
        
        tableWrapper.addEventListener('mousedown', (e) => {
            isScrolling = true;
            startX = e.pageX - tableWrapper.offsetLeft;
            scrollLeft = tableWrapper.scrollLeft;
        });
        
        tableWrapper.addEventListener('mouseleave', () => {
            isScrolling = false;
        });
        
        tableWrapper.addEventListener('mouseup', () => {
            isScrolling = false;
        });
        
        tableWrapper.addEventListener('mousemove', (e) => {
            if (!isScrolling) return;
            e.preventDefault();
            const x = e.pageX - tableWrapper.offsetLeft;
            const walk = (x - startX) * 2;
            tableWrapper.scrollLeft = scrollLeft - walk;
        });
    }
    
    console.log('✅ Comparativa de servicios inicializada correctamente');
});

// ================================================================
// MEJORA DE ACCESIBILIDAD
// ================================================================

// Agregar roles ARIA para mejor accesibilidad
document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('.comparison-table table');
    
    if (table) {
        table.setAttribute('role', 'table');
        table.setAttribute('aria-label', 'Comparativa de servicios de transporte');
        
        const thead = table.querySelector('thead');
        if (thead) thead.setAttribute('role', 'rowgroup');
        
        const tbody = table.querySelector('tbody');
        if (tbody) tbody.setAttribute('role', 'rowgroup');
        
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            row.setAttribute('role', 'row');
        });
        
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
            cell.setAttribute('role', cell.tagName === 'TH' ? 'columnheader' : 'cell');
        });
    }
});




