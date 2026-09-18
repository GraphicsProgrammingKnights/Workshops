void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    // range of -1 <> 1
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
        
    float d = length(uv); // 0 <> inf.

    // TODO: make rings that move outward
    // hint: sin, d, and iTime
    // tip: consider the range of values and functions here
    float mask = d;
    
    // TODO: make the rings "glow"
    // hint: what does 1/x do near 0?

    // TODO: fade the green out toward the edges of the screen
    vec3 color = vec3(0.098, 0.859, 0.086);

    color *= mask;

    fragColor = vec4(color,1.0);
}