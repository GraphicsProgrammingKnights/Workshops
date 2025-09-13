void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    float len = length(uv);
    float s = step(0.5, uv.x);
    float m = mix(1., 0., uv.x);
    float f = fract(uv.x*5.);
    float ss = smoothstep(0.4, 0.6, uv.x);    

    vec3 col = vec3(len);

    // Output to screen
    fragColor = vec4(col,1.0);
}