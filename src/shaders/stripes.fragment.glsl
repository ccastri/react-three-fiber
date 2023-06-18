varying vec2 vUv;
void main() {
    float strength = vUv.x;
    gl_FragColor.rgba = vec4(vec3(strength), 1.0));
}