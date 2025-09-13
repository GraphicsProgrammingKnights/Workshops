void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    // range of -1 <> 1
    vec2 uv = (fragCoord * 2. - iResolution.xy) / iResolution.y;
        
    vec3 col; 
    
    // Uncomment the lines below to see output
       
    float r = 0.7;
    float d = length(uv) - r; // circle sdf
    //col = vec3(d);
    
    float sd = step(0.01, d);
    //col = vec3(sd);
    
    float ssd = smoothstep(0.01, 0.1, d);
    //col = vec3(ssd);

    fragColor = vec4(col, 1.0);
}