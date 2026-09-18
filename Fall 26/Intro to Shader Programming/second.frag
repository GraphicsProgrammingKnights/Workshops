void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    // TODO: remap uv so (0,0) is the center and y goes from -1 to 1
    vec2 uv = fragCoord.xy; // 0 <> iResolution

    vec3 col;
    col = vec3(uv.xy, 0.0);
    
    // TODO: use sin(iTime) to make t go between 0 and 1
    float t;
    //col = vec3(t);
    
    // TODO: use mix() to blend from red to green using t
    vec3 c;
    //col = c;
    
    fragColor = vec4(col, 1.0);
}