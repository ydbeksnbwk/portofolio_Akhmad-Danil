import React, { useState } from "react"
import { Modal, IconButton, Box, Backdrop } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif, Title, Issuer, Date, VerificationUrl, CredentialId, Score }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<div className="group relative rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full">
				<Box
					sx={{
						position: "relative",
						overflow: "hidden",
						aspectRatio: "16/11.5",
						cursor: "pointer",
					}}
					onClick={handleOpen}
				>
					<img
						className="certificate-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={ImgSertif}
						alt={Title || "Certificate"}
						loading="lazy"
					/>
					
					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
						<div className="flex items-center justify-between text-white">
							<span className="text-xs font-semibold bg-indigo-600/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-md shadow-indigo-500/30">
								<FullscreenIcon sx={{ fontSize: 16 }} /> Perbesar
							</span>
							{CredentialId && (
								<span className="text-[10px] text-gray-300 font-mono bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
									ID: {CredentialId}
								</span>
							)}
						</div>
					</div>
				</Box>

				{/* Metadata details */}
				{(Title || Issuer) && (
					<div className="p-4 bg-slate-900/90 border-t border-white/5 space-y-2 flex-1 flex flex-col justify-between">
						<div>
							{Title && (
								<h4 className="text-sm font-semibold text-gray-100 line-clamp-2 group-hover:text-indigo-300 transition-colors leading-snug mb-1" title={Title}>
									{Title}
								</h4>
							)}
							<div className="flex items-center justify-between text-xs text-gray-400">
								<span className="line-clamp-1 text-slate-300 font-medium">{Issuer}</span>
								{Date && <span className="text-[11px] text-gray-500 shrink-0 ml-2">{Date}</span>}
							</div>
						</div>

						<div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2 flex-wrap">
							{Score && (
								<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
									★ {Score}
								</span>
							)}
							{VerificationUrl ? (
								<a
									href={VerificationUrl}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="text-[11px] font-medium text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1 ml-auto"
								>
									✓ Verifikasi Online →
								</a>
							) : CredentialId ? (
								<span className="text-[10px] text-slate-400 ml-auto font-mono">
									#{CredentialId}
								</span>
							) : null}
						</div>
					</div>
				)}
			</div>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: 0,
					padding: 0,
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
					},
				}}>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						m: 0,
						p: 0,
						outline: "none",
						"&:focus": {
							outline: "none",
						},
					}}>
					{/* Close Button */}
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							zIndex: 1,
							padding: 1,
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}
						size="large">
						<CloseIcon sx={{ fontSize: 24 }} />
					</IconButton>

					{/* Modal Image */}
					<img
						src={ImgSertif}
						alt="Certificate Full View"
						style={{
							display: "block",
							maxWidth: "100%",
							maxHeight: "90vh",
							margin: "0 auto",
							objectFit: "contain",
						}}
					/>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
