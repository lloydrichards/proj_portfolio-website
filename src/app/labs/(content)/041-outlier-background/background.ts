"use client";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  outlier: THREE.Object3D<THREE.Object3DEventMap> | undefined,
  outlierLight: THREE.PointLight,
  stars: Array<
    THREE.Mesh<
      THREE.BoxGeometry,
      THREE.MeshStandardMaterial,
      THREE.Object3DEventMap
    >
  >;

const background = document.getElementById("bg");

function init() {
  if (!background) return;

  const canvasWidth = background.clientWidth;
  const canvasHeight = background.clientHeight;

  // Create an empty scene
  scene = new THREE.Scene();

  // Create a basic perspective camera
  camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 1000);
  camera.position.z = 10;
  camera.position.y = -200;

  // Create a renderer with Antialiasing
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: background,
  });

  // Configure renderer clear color
  renderer.setClearColor("#100E0F");

  // Configure renderer size
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);

  // ------------------------------------------------
  // FUN STARTS HERE
  // ------------------------------------------------

  // Create a Cube Mesh with basic material
  const material = new THREE.MeshStandardMaterial({
    color: "#2DB1A4",
    emissive: "#2DB1A4",
    emissiveIntensity: 0.5,
  });

  function makeCuboid(material: THREE.MeshStandardMaterial) {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32);
    return new THREE.Mesh(geometry, material);
  }

  function makeCorner(material: THREE.MeshStandardMaterial) {
    const geometry = new THREE.ExtrudeGeometry(
      new THREE.Shape([
        new THREE.Vector2(-0.5, -0.5),
        new THREE.Vector2(-0.5, 0.5),
        new THREE.Vector2(0, 0.5),
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0.5, 0),
        new THREE.Vector2(0.5, -0.5),
      ]),
      {
        depth: 0.5,
        bevelEnabled: false,
      },
    );
    return new THREE.Mesh(geometry, material);
  }

  function makeTriangle(material: THREE.MeshStandardMaterial) {
    const geometry = new THREE.ExtrudeGeometry(
      new THREE.Shape([
        new THREE.Vector2(-0.7, -0.65),
        new THREE.Vector2(0, 0.65),
        new THREE.Vector2(0.7, -0.65),
      ]),
      {
        depth: 1,
        bevelEnabled: false,
      },
    );
    return new THREE.Mesh(geometry, material);
  }

  function makeSemiCircle(material: THREE.MeshStandardMaterial) {
    const cylinder = new THREE.CylinderGeometry(
      0.75,
      0.75,
      0.75,
      32,
      1,
      false,
      Math.PI / 2,
      Math.PI,
    );

    const plane = new THREE.PlaneGeometry(1.5, 0.75, 32);
    const cylinderMesh = new THREE.Mesh(cylinder);
    const planeMesh = new THREE.Mesh(plane);
    cylinderMesh.updateMatrix();
    cylinder.applyMatrix4(cylinderMesh.matrix);
    planeMesh.updateMatrix();
    plane.applyMatrix4(planeMesh.matrix);

    const geometry = BufferGeometryUtils.mergeGeometries([cylinder, plane]);

    return new THREE.Mesh(geometry, material);
  }

  // select random number between 0 and 4

  function randomShape() {
    const random = Math.floor(Math.random() * 4);
    switch (random) {
      case 0:
        return makeTriangle(material);
      case 1:
        return makeCuboid(material);
      case 2:
        return makeCorner(material);
      case 3:
        return makeSemiCircle(material);
    }
  }

  outlier = randomShape();

  outlier?.position.set(2, 2, -5);

  // Add cube to Scene
  if (outlier) {
    scene.add(outlier);
  }

  // Lights
  const botLight = new THREE.PointLight(0x9f5f9c, 1, 100);
  botLight.position.set(1, 4, 0);
  botLight.intensity = 80;

  const topLight = new THREE.PointLight(0xdcb229, 1, 100);
  topLight.position.set(0, 2, 5);
  topLight.intensity = 80;

  outlierLight = new THREE.PointLight(0x2db1a4, 1, 100);
  outlierLight.position.set(2, 2, -5);
  outlierLight.intensity = 100;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  ambientLight.intensity = 0.5;
  scene.add(botLight, topLight, ambientLight, outlierLight);

  function generateStar() {
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshStandardMaterial({
      color: "#231f20",
    });
    const star = new THREE.Mesh(geometry, material);

    star.position.set(
      THREE.MathUtils.randFloatSpread(50),
      THREE.MathUtils.randFloatSpread(200),
      THREE.MathUtils.randFloat(-20, 0),
    );
    star.rotation.x = Math.random() * 2 * Math.PI;

    return star;
  }

  stars = Array(1200).fill(null).map(generateStar);
  stars.forEach((star) => scene.add(star));
}

// Render Loop
const render = function () {
  requestAnimationFrame(render);
  if (!outlier) return;
  const t = document.body.getBoundingClientRect().top;
  outlier.rotation.x += 0.01;
  outlier.rotation.y += 0.01;
  outlier.position.y = t * 0.005;

  outlierLight.position.y = t * 0.005;

  // rotates stars
  stars.forEach((star: { rotation: { x: number; y: number } }) => {
    star.rotation.x += 0.005;
    star.rotation.y += 0.005;
  });

  camera.position.y = t * +0.01;

  // Render the scene
  renderer.render(scene, camera);
};

function onWindowResize() {
  const background = document.getElementById("bg");
  if (!background) return;

  const canvasWidth = background.clientWidth;
  const canvasHeight = background.clientHeight;

  camera.aspect = canvasWidth / canvasHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvasWidth, canvasHeight);
}
init();
window.addEventListener("resize", onWindowResize, false);
render();
