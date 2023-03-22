import { useState } from 'react';

import { filesize } from 'filesize';
import { ErrorCode, FileRejection, useDropzone } from 'react-dropzone';
import * as Tooltip from '@radix-ui/react-tooltip';

import { ProgressBarComponent } from '@uptake-ui-progress-bar';

import UploaderDeleteIcon from './uploader-delete.icon';
import UploaderFileIcon from './uploader-file.icon';
import UploaderIcon from './uploader.icon';

import {
	UploaderContainer,
	UploaderContent,
	UploaderFile,
	UploaderFileContent,
	UploaderFileDescription,
	UploaderFileDetails,
	UploaderFiles,
	UploaderFileSize,
	UploaderFileTitle,
	UploaderHint,
	UploaderSection,
	UploaderTitle,
	UploaderTooltip,
	UploaderTooltipArrow,
	UploaderTooltipTrigger
} from './uploader.styles';
import type { UploaderProps } from './uploader.types';
import UploaderRejectedFileIcon from './uploader-rejected-file.icon';

export const UploaderComponent = (props: UploaderProps) => {
	const { accept, disabled = false, maxFiles = 1, maxSize = 5242880, multiple = false } = props;

	const [files, setFiles] = useState<File[]>([]);
	const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

	const { getRootProps, getInputProps } = useDropzone({
		accept,
		disabled,
		maxFiles,
		maxSize,
		multiple,
		onDrop: (acceptedFiles) => {
			setFiles((prevFiles) => [...prevFiles, ...acceptedFiles.map((file) => file)]);
		},
		onDropRejected: (fileRejections) => {
			setRejectedFiles((prevFiles) => [...prevFiles, ...fileRejections.map((file) => file)]);
		}
	});

	const deleteFile = (index: number) => {
		setFiles((prevFiles) => prevFiles.filter((_, fileIndex) => index !== fileIndex));
	};

	const deleteRejectedFile = (index: number) => {
		setRejectedFiles((prevFiles) => prevFiles.filter((_, fileIndex) => index !== fileIndex));
	};

	const tooltipElement = (index: number, func: (index: number) => void) => {
		return (
			<Tooltip.Provider delayDuration={0}>
				<Tooltip.Root>
					<UploaderTooltipTrigger>
						<UploaderDeleteIcon onClick={() => func(index)} />
					</UploaderTooltipTrigger>

					<Tooltip.Portal>
						<UploaderTooltip align='end' avoidCollisions side='top' sideOffset={5}>
							Delete this file
							<UploaderTooltipArrow />
						</UploaderTooltip>
					</Tooltip.Portal>
				</Tooltip.Root>
			</Tooltip.Provider>
		);
	};

	const sizeLimit = (size: number) => {
		return filesize(size, { base: 2, standard: 'jedec' }).toString();
	};

	return (
		<UploaderContainer>
			<UploaderSection {...getRootProps()} disabled={disabled}>
				<input {...getInputProps()} />

				<UploaderIcon />
				<UploaderContent>
					<UploaderTitle disabled={disabled}>
						<span>Click to upload</span> or drag and drop
					</UploaderTitle>
					<UploaderHint>SVG, PNG, JPG, GIF (max size {sizeLimit(maxSize)})</UploaderHint>
				</UploaderContent>
			</UploaderSection>

			{rejectedFiles.length > 0 && (
				<UploaderFiles>
					{rejectedFiles.map((rejectedFile, index) => (
						<UploaderFile error key={rejectedFile.file.lastModified}>
							<UploaderRejectedFileIcon />

							<UploaderFileDetails>
								<UploaderFileDescription>
									<UploaderFileContent>
										<UploaderFileTitle>{rejectedFile.file.name}</UploaderFileTitle>
										<UploaderFileSize>{sizeLimit(rejectedFile.file.size)}</UploaderFileSize>
									</UploaderFileContent>

									{tooltipElement(index, deleteRejectedFile)}
								</UploaderFileDescription>

								{rejectedFile.errors.map((error) => {
									switch (error.code) {
										case ErrorCode.FileTooLarge: {
											return 'File is too large.';
										}

										case ErrorCode.FileTooSmall: {
											return 'File is too small.';
										}

										case ErrorCode.FileInvalidType: {
											return 'File type is not allowed.';
										}

										case ErrorCode.TooManyFiles: {
											return 'Maximum file allowed is ' + maxFiles;
										}

										default: {
											return null;
										}
									}
								})}
							</UploaderFileDetails>
						</UploaderFile>
					))}
				</UploaderFiles>
			)}

			<UploaderFiles>
				{files.map((file, index) => (
					<UploaderFile key={file.lastModified}>
						<UploaderFileIcon />

						<UploaderFileDetails>
							<UploaderFileDescription>
								<UploaderFileContent>
									<UploaderFileTitle>{file.name}</UploaderFileTitle>
									<UploaderFileSize>{sizeLimit(file.size)}</UploaderFileSize>
								</UploaderFileContent>

								{tooltipElement(index, deleteFile)}
							</UploaderFileDescription>

							<ProgressBarComponent progress={35} showInfo side='right' />
						</UploaderFileDetails>
					</UploaderFile>
				))}
			</UploaderFiles>
		</UploaderContainer>
	);
};

export default UploaderComponent;
