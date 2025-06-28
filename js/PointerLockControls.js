let camera, scene, renderer;
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let velocity = { x: 0, z: 0 };
let direction = { x: 0, z: 0 };
let yaw = 0, pitch = 0;

window.ativarControlesDoomLike = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
        console.warn("Canvas não encontrado.");
        return;
    }

    //! TOODO: PEGAR CÂMERA E CENA DO JOGO
}