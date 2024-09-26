    // Clase Linea
    class Linea {
      constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
      }
    }

    // Clase Cubo para Proyección Isométrica
    class CuboIsometrico {
      constructor(x, y, lado) {
        this.x = x;
        this.y = y;
        this.lado = lado;
      }

      // Proyección isométrica
      proyectarIsometrico(x, y, z) {
        let isoX = x - y;
        let isoY = (x + y) / 2 - z;
        return { isoX, isoY };
      }

      // Dibujar cubo en isométrico
      draw(ctx) {
        let p0 = this.proyectarIsometrico(this.x, this.y, this.lado);
        let p1 = this.proyectarIsometrico(this.x + this.lado, this.y, this.lado);
        let p2 = this.proyectarIsometrico(this.x + this.lado, this.y + this.lado, this.lado);
        let p3 = this.proyectarIsometrico(this.x, this.y + this.lado, this.lado);
        let p4 = this.proyectarIsometrico(this.x, this.y, 0);
        let p5 = this.proyectarIsometrico(this.x + this.lado, this.y, 0);
        let p6 = this.proyectarIsometrico(this.x + this.lado, this.y + this.lado, 0);
        let p7 = this.proyectarIsometrico(this.x, this.y + this.lado, 0);

        // Dibujar caras del cubo
        this.drawLinea(ctx, p0, p1);
        this.drawLinea(ctx, p1, p2);
        this.drawLinea(ctx, p2, p3);
        this.drawLinea(ctx, p3, p0);
        
        this.drawLinea(ctx, p0, p4);
        this.drawLinea(ctx, p1, p5);
        this.drawLinea(ctx, p2, p6);
        this.drawLinea(ctx, p3, p7);
        
        this.drawLinea(ctx, p4, p5);
        this.drawLinea(ctx, p5, p6);
        this.drawLinea(ctx, p6, p7);
        this.drawLinea(ctx, p7, p4);
      }

      drawLinea(ctx, pA, pB) {
        let linea = new Linea(pA.isoX + 200, pA.isoY + 200, pB.isoX + 200, pB.isoY + 200);  // Ajuste al centro del canvas
        linea.draw(ctx);
      }
    }

    // Clase Cubo para Proyección Perspectiva
    class CuboPerspectiva {
      constructor(x, y, lado) {
        this.x = x;
        this.y = y;
        this.lado = lado;
      }

      // Proyección en perspectiva
      proyectarPerspectiva(x, y, z, distancia) {
        let scale = distancia / (distancia + z);
        let perspectivaX = x * scale;
        let perspectivaY = y * scale;
        return { perspectivaX, perspectivaY };
      }

      // Dibujar cubo en perspectiva
      draw(ctx, distancia) {
        let p0 = this.proyectarPerspectiva(this.x, this.y, this.lado, distancia);
        let p1 = this.proyectarPerspectiva(this.x + this.lado, this.y, this.lado, distancia);
        let p2 = this.proyectarPerspectiva(this.x + this.lado, this.y + this.lado, this.lado, distancia);
        let p3 = this.proyectarPerspectiva(this.x, this.y + this.lado, this.lado, distancia);
        let p4 = this.proyectarPerspectiva(this.x, this.y, 0, distancia);
        let p5 = this.proyectarPerspectiva(this.x + this.lado, this.y, 0, distancia);
        let p6 = this.proyectarPerspectiva(this.x + this.lado, this.y + this.lado, 0, distancia);
        let p7 = this.proyectarPerspectiva(this.x, this.y + this.lado, 0, distancia);

        // Dibujar caras del cubo
        this.drawLinea(ctx, p0, p1);
        this.drawLinea(ctx, p1, p2);
        this.drawLinea(ctx, p2, p3);
        this.drawLinea(ctx, p3, p0);
        
        this.drawLinea(ctx, p0, p4);
        this.drawLinea(ctx, p1, p5);
        this.drawLinea(ctx, p2, p6);
        this.drawLinea(ctx, p3, p7);
        
        this.drawLinea(ctx, p4, p5);
        this.drawLinea(ctx, p5, p6);
        this.drawLinea(ctx, p6, p7);
        this.drawLinea(ctx, p7, p4);
      }

      drawLinea(ctx, pA, pB) {
        let linea = new Linea(pA.perspectivaX + 250, pA.perspectivaY + 250, pB.perspectivaX + 250, pB.perspectivaY + 250);  // Ajuste al centro del canvas
        linea.draw(ctx);
      }
    }

    // Clase Cubo para Proyección Ortográfica
    class CuboOrtografico {
      constructor(x, y, lado) {
        this.x = x;
        this.y = y;
        this.lado = lado;
      }

      // Proyección ortográfica
      proyectarOrtografico(x, y, z) {
        // La proyección ortográfica simplemente ignora la profundidad (z)
        return { ortoX: x, ortoY: y };
      }

      // Dibujar cubo en proyección ortográfica
      draw(ctx) {
        let p0 = this.proyectarOrtografico(this.x, this.y, this.lado);
        let p1 = this.proyectarOrtografico(this.x + this.lado, this.y, this.lado);
        let p2 = this.proyectarOrtografico(this.x + this.lado, this.y + this.lado, this.lado);
        let p3 = this.proyectarOrtografico(this.x, this.y + this.lado, this.lado);
        let p4 = this.proyectarOrtografico(this.x, this.y, 0);
        let p5 = this.proyectarOrtografico(this.x + this.lado, this.y, 0);
        let p6 = this.proyectarOrtografico(this.x + this.lado, this.y + this.lado, 0);
        let p7 = this.proyectarOrtografico(this.x, this.y + this.lado, 0);

        // Dibujar caras del cubo
        this.drawLinea(ctx, p0, p1);
        this.drawLinea(ctx, p1, p2);
        this.drawLinea(ctx, p2, p3);
        this.drawLinea(ctx, p3, p0);
        
        this.drawLinea(ctx, p0, p4);
        this.drawLinea(ctx, p1, p5);
        this.drawLinea(ctx, p2, p6);
        this.drawLinea(ctx, p3, p7);
        
        this.drawLinea(ctx, p4, p5);
        this.drawLinea(ctx, p5, p6);
        this.drawLinea(ctx, p6, p7);
        this.drawLinea(ctx, p7, p4);
      }

      drawLinea(ctx, pA, pB) {
        let linea = new Linea(pA.ortoX + 250, pA.ortoY + 250, pB.ortoX + 250, pB.ortoY + 250);  // Ajuste al centro del canvas
        linea.draw(ctx);
      }
    }

    // Crear y dibujar cubo isométrico
    let isometricCanvas = document.getElementById('isometric-canvas');
    let isometricCtx = isometricCanvas.getContext('2d');
    let cuboIsometrico = new CuboIsometrico(50, 50, 100);
    cuboIsometrico.draw(isometricCtx);

    // Crear y dibujar cubo en perspectiva
    let perspectiveCanvas = document.getElementById('perspective-canvas');
    let perspectiveCtx = perspectiveCanvas.getContext('2d');
    let cuboPerspectiva = new CuboPerspectiva(-200, -180, 150);
    cuboPerspectiva.draw(perspectiveCtx, 300);  // Distancia al punto de fuga

    // Crear y dibujar cubo ortográfico
    let orthographicCanvas = document.getElementById('orthographic-canvas');
    let orthographicCtx = orthographicCanvas.getContext('2d');
    let cuboOrtografico = new CuboOrtografico(-100, -100, 200);
    cuboOrtografico.draw(orthographicCtx);