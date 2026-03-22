import React, { useCallback, useEffect, useRef } from "react";
import { RxAvatar } from "react-icons/rx"
import useCommentary from "@/src/hooks/useCommentary"
import {useSite} from "@/src/hooks/useSite";

interface IProps {
}

export const Commentaries = ({}:IProps) => {
	const {commentaries} = useCommentary();
	const {t} = useSite();

	return (
		<div>
			<h3 className="comments-title">{t('comments.title')}</h3>
			<div className="commentaries-body">
				{commentaries.length === 0 && (
					<div className="empty-comments">
						<span className="empty-icon">💬</span>
						<p>{t('comments.empty')}</p>
					</div>
				)}
				{commentaries.map((item) => (
					<div className="commentary" key={item.id}>
						<div className="avatar-wrapper">
							<RxAvatar size={34} />
						</div>
						<div className="content">
							<p>{item.comment}</p>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				.comments-title {
					font-size: 0.8rem;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.1em;
					color: #64748b;
					margin: 0 0 1rem;
				}
				.commentaries-body {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;
					margin-bottom: 1.5rem;
				}
				.empty-comments {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.5rem;
					padding: 2.5rem;
					color: #475569;
				}
				.empty-icon {
					font-size: 2rem;
				}
				.commentary {
					display: grid;
					align-items: start;
					grid-template-columns: 2.5rem 1fr;
					gap: 0.75rem;
				}
				.avatar-wrapper {
					display: flex;
					align-items: center;
					justify-content: center;
					color: #6366f1;
					padding-top: 0.6rem;
				}
				.content {
					position: relative;
					background: rgba(99, 102, 241, 0.06);
					border: 1px solid rgba(99, 102, 241, 0.15);
					border-radius: 10px;
					padding: 0.75rem 2.5rem 0.75rem 1rem;
				}
				.content p {
					display: -webkit-box;
					overflow: hidden;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					text-align: left;
					color: #cbd5e1;
					font-size: 0.9rem;
					line-height: 1.6;
					margin: 0;
				}
				.delete-btn {
					position: absolute;
					right: 0.7rem;
					top: 0.7rem;
					color: #ef4444;
					cursor: pointer;
					opacity: 0.55;
					transition: opacity 0.2s ease;
					display: flex;
				}
				.delete-btn:hover {
					opacity: 1;
				}
			`}</style>
		</div>
	)
}
export default Commentaries;
