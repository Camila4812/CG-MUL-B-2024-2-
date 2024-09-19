// Define the classes
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
  
  class Cuadrado {
    constructor(x, y, lado) {
      this.x = x;
      this.y = y;
      this.lado = lado;
    }
  
    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.lado, this.lado);
      ctx.stroke();
    }
  }
  
  class Cubo {
    constructor(x, y, lado) {
      this.x = x;
      this.y = y;
      this.lado = lado;
      this.faces = [];
    }
  
    addFace(face) {
      this.faces.push(face);
    }
  
    dibujar_perspectiva(ctx, angle) {
      // Perspective projection
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(angle * Math.PI / 180);
      ctx.scale(1, 1);
      for (let face of this.faces) {
        face.draw(ctx);
      }
      ctx.restore();
    }
  
    dibujar_ortografica(ctx, angle) {
      // Orthographic projection
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(angle * Math.PI / 180);
      for (let face of this.faces) {
        face.draw(ctx);
      }
      ctx.restore();
    }
  
    dibujar_isometrica(ctx, angle) {
      // Isometric projection
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(angle * Math.PI / 180);
      ctx.scale(1, 0.5);
      for (let face of this.faces) {
        face.draw(ctx);
      }
      ctx.restore();
    }
  }
  
  // Create the cube
  let cube = new Cubo(200, 200, 300);
  cube.addFace(new Cuadrado(0, 0, 100));
  cube.addFace(new Cuadrado(100, 0, 100));
  cube.addFace(new Cuadrado(0, 100, 100));
  cube.addFace(new Cuadrado(100, 100, 100));
  cube.addFace(new Linea(0, 0, 100, 100));
  cube.addFace(new Linea(100, 0, 0, 100));
  cube.addFace(new Linea(1, 100, 100, 200))
  
  // Get the canvases
  let perspectiveCanvas = document.getElementById('perspective-canvas');
  let orthographicCanvas = document.getElementById('orthographic-canvas');
  let isometricCanvas = document.getElementById('isometric-canvas');
  
  // Get the 2D drawing contexts
  let perspectiveCtx = perspectiveCanvas.getContext('2d');
  let orthographicCtx = orthographicCanvas.getContext('2d');
  let isometricCtx = isometricCanvas.getContext('2d');
  
  // Draw the cube under different projections
  let angle = 45; // Angle in degrees
  cube.dibujar_perspectiva(perspectiveCtx, angle);
  cube.dibujar_ortografica(orthographicCtx, angle);
  cube.dibujar_isometrica(isometricCtx, angle);

  