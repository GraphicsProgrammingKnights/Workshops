void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    vec2 uv = fragCoord.xy; // 0 <> iResolution
    uv *= 2.; // 0 <> iResolution * 2
    uv -= iResolution.xy; // -iResolution <> iResolution
    uv /= iResolution.y; // -1 <> 1 (if our screen is square)
    
    // Uncomment the below lines to see the output
    
    vec3 col;
    //col = vec3(uv.xy, 0.);
    
    float t = abs(sin(iTime));
    //col = vec3(t);
    
    
    vec3 c = mix(vec3(1.,0.,0.), vec3(0.,1.,0.), t);
    //col = c;
    
    

    fragColor = vec4(col, 1.0);
}