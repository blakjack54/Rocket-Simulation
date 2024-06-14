const canvas = document.getElementById('rocketCanvas');
const ctx = canvas.getContext('2d');
const thrustInput = document.getElementById('thrustInput');
const launchButton = document.getElementById('launchButton');

let rocket = {
  x: 50,
  y: canvas.height - 30,
  width: 20,
  height: 30,
  thrust: 0,
  velocity: 0,
  gravity: 0.1,
  isLaunched: false
};

function drawRocket() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(rocket.x, rocket.y, rocket.width, rocket.height);
}

function updateRocket() {
  if (rocket.isLaunched) {
    rocket.thrust = parseInt(thrustInput.value);
    rocket.velocity -= rocket.gravity;
    rocket.velocity += rocket.thrust * 0.01;
    rocket.y -= rocket.velocity;

    if (rocket.y < 0) {
      rocket.isLaunched = false;
      rocket.y = canvas.height - 30;
      rocket.velocity = 0;
      alert('Rocket has landed!');
    }
  }

  drawRocket();
  requestAnimationFrame(updateRocket);
}

launchButton.addEventListener('click', () => {
  rocket.isLaunched = true;
});

updateRocket();
