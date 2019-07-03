#version 330

//out color
out vec4 fragColor;
uniform sampler2D u_diffuse_map;

void main(){
	fragColor = vec4(texture(u_diffuse_map, gl_PointCoord));
    //fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}



