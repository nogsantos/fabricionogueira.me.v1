import styled from 'styled-components';

export const Title = styled.span`
	background-color: #ffffff;
	width: 100%;
	opacity: 0.6;
	filter: alpha(opacity=60);
	&:hover {
		opacity: 0.9;
		filter: alpha(opacity=90);
	}
`;

export const Image = styled.img`
	opacity: 0.9;
	filter: alpha(opacity=90);
	&:hover {
		opacity: 1;
		filter: alpha(opacity=100);
	}
`;

export const Thumb = styled.img`
	border: none;
	max-width: 100px !important;
`;

export const NoImage = styled.div`
	height: 215px;
`;

export const NoThumb = styled.div`
	height: 120px;
	width: 120px;
`;
