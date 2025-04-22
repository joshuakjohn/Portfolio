import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

@Component({
  selector: 'app-threed',
  templateUrl: './threed.component.html',
  styleUrls: ['./threed.component.scss']
})
export class ThreedComponent implements AfterViewInit {
  @ViewChild('threeCanvas', { static: true }) canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private model!: THREE.Object3D;

  ngAfterViewInit() {
    this.initThree();
  }

  private initThree() {
    // Get Canvas Element
    const canvas = this.canvasRef.nativeElement;
    
    // Initialize Scene
    this.scene = new THREE.Scene();

    // Initialize Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Initialize Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Add Cube
    const loader = new GLTFLoader();
    loader.load('../../../assets/cube.glb', (gltf) => {
      this.model = gltf.scene;
      this.model.scale.set(3.1, 3.1, 3.1);
      this.model.position.set(0,-4.5,0)
      this.scene.add(gltf.scene);
    });

    // //rectlight
    // RectAreaLightUniformsLib.init();

		// 		const rectLight1 = new THREE.RectAreaLight( 0xff0000, 2, 1, 5 );
		// 		rectLight1.position.set(0,-4.5,0);
		// 		this.scene.add( rectLight1 );



    //light
    const light1 = new THREE.PointLight(0xffffff, 2);
    light1.position.set(2, 2, 5);
    this.scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 10);
    light2.position.set(0,-4.5,0);
    this.scene.add(light2);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }
}
