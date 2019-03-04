import styled from 'styled-components';
import media from 'styled-media-query';

export const Avatar = styled.div`
	position: absolute;
	top: 40px;
	right: 5%;
	z-index: 999;
	text-align: center;
	${media.lessThan('medium')`
        display: hidden !important;
    `};
`;

export const Thumb = styled.img`
	max-width: 180px !important;
`;

export const Badge = styled.span`
	margin: 5px;
	padding: 5px;
`;
