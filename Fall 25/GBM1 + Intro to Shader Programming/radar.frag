void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    // range of -1 <> 1
    vec2 uv = (fragCoord * 2. - iResolution.xy) / iResolution.y;
        
    float d = length(uv); // 0 <> inf.
    
    float mask = sin(d*11. - iTime); // -1 <> 1
    mask = abs(mask); // 0 <> 1
    
    mask = 0.03/mask; // inverse
    
    // smoothstep puts you in 0 <> 1 range
    mask = smoothstep(0.01, 0.1, mask); 
    
    // interpolation value for color
    float t = length(uv);
    t /= 1.5;
    t = 1.-t;
    
    vec3 color = vec3(mix(vec3(0.), vec3(0.098, 0.859, 0.086), t));

    color *= mask; // apply mask

    fragColor = vec4(color,1.0);
}