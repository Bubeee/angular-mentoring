import { Injectable, ComponentRef, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { InjectionToken } from '@angular/core';

import { OverlayRef } from '@angular/cdk/overlay';
import { ConfirmationDialogOverlayRef } from '../../shared-components/confirmation-dialog/confirmation-dialog-overlayref';
import { Searchable_Item_Data } from '../../shared-components/confirmation-dialog/confirmation-dialog-overlay-data';
import { SearchableItem } from '../../shared-components/searchable-item/searchable-item';
import { ConfirmationDialogComponent } from '../../shared-components/confirmation-dialog/confirmation-dialog.component';


interface ConfrmationDialogOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: SearchableItem;
}

const DEFAULT_CONFIG: ConfrmationDialogOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};

@Injectable()
export class ConfirmaitonDialogOverlayService {

  constructor(private injector: Injector, private overlay: Overlay) { }

  open(config: ConfrmationDialogOverlayConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);

    const dialogRef = new ConfirmationDialogOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: ConfrmationDialogOverlayConfig, dialogRef: ConfirmationDialogOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(ConfirmationDialogComponent, null, injector);
    const containerRef: ComponentRef<ConfirmationDialogComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createOverlay(config: ConfrmationDialogOverlayConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: ConfrmationDialogOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }

  private createInjector(config: ConfrmationDialogOverlayConfig, dialogRef: ConfirmationDialogOverlayRef): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(ConfirmationDialogOverlayRef, dialogRef);
    injectionTokens.set(Searchable_Item_Data, config.data);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }
}
