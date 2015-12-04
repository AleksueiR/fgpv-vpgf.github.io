angular.module("app.templates").run(["$templateCache", function($templateCache) {$templateCache.put("app/layout/shell.html","<div class=\"shell layout layout-fill md-body-1\" ng-controller=\"ShellController as self\" state=\"{{ self.$state.current.name }}\"><ng-include src=\"\'app/ui/sidenav/sidenav.html\'\"></ng-include><div class=inner-shell layout=column><div class=loading-splash layout layout-align=\"center center\" ng-hide=!self.isLoading><span>Loading</span></div><div class=rv-esri-map rv-init-map=!self.isLoading></div><ng-include src=\"\'app/ui/mapnav/mapnav.html\'\"></ng-include><div ng-class=\"{ active: self.active }\" ui-view=appbarPlug></div><div ng-class=\"{ active: self.active, stagger: self.isStaggering }\" ui-view=panelPlug class=rv-plug-slide-down></div><div ng-class=\"{ active: self.active }\" ui-view=sidePanelPlug class=rv-plug-slide-right></div><div ng-class=\"{ active: self.active }\" rv-morph=self.mode ui-view=filtersPlug class=rv-plug-slide-down-grand></div><div ng-class=\"{ active: self.active }\" ui-view=detailsPlug></div><div ng-class=\"{ active: self.active }\" ui-view=geoSearchPlug></div><md-whiteframe class=md-whiteframe-z1 layout layout-align=\"center center\" style=\"display: none;\">I\'m {{ self.config.title }} and {{ \'page.title\' | translate }}</md-whiteframe></div></div>");
$templateCache.put("app/ui/appbar/appbar.html","<div class=\"main-appbar rv-whiteframe-z2\" ng-controller=\"AppbarController as self\"><div class=\"tools layout\"><md-button aria-label=\"Open Sidenav\" class=\"md-icon-button black\" ng-click=self.layoutService.sidenav.open()><md-tooltip>Menu</md-tooltip><md-icon md-svg-src=navigation:menu></md-icon></md-button><span flex></span><md-button aria-label=Sets class=\"md-icon-button primary\" ng-class=\"{ selected: self.tocSelected }\" ng-click=self.toggleToc()><md-tooltip>Layers</md-tooltip><md-icon md-svg-src=maps:layers></md-icon></md-button><md-button aria-label=Tools class=\"md-icon-button primary\" ng-class=\"{ selected: self.toolboxSelected }\" ng-click=self.toggleToolbox()><md-tooltip>Tools</md-tooltip><md-icon md-svg-src=content:create></md-icon></md-button></div></div>");
$templateCache.put("app/ui/filters/filters-default.html","<rv-content-pane title-style=title title=\"Selected Feature Layer Name\"><div><p>{{ self.message }}</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p><p>[ filter default content ]</p></div></rv-content-pane>");
$templateCache.put("app/ui/mapnav/mapnav-button.html","<md-button aria-label=\"{{ self.control.label }}\" ng-click=self.control.call()><md-tooltip md-direction=left>{{self.control.tooltip}}</md-tooltip><md-icon md-svg-src=\"{{ self.control.icon }}\"></md-icon></md-button>");
$templateCache.put("app/ui/mapnav/mapnav.html","<div class=mapnav ng-controller=\"MapNavigationController as self\"><ul class=\"rv-button-group hover rv-whiteframe-z2\" ng-switch on=self.service.config.zoom><li ng-switch-when=buttons><rv-mapnav-button class=bold control=self.service.controls.zoom.inButton></rv-mapnav-button></li><li ng-switch-when=all><rv-mapnav-button class=bold control=self.service.controls.zoom.inButton></rv-mapnav-button></li><li ng-switch-when=slider><div>zoom slider only</div></li><li ng-switch-when=all><div>zoom slider</div></li><li ng-switch-when=buttons></li><md-divider class=md-default-theme></md-divider><li ng-switch-when=buttons><rv-mapnav-button class=bold control=self.service.controls.zoom.outButton></rv-mapnav-button></li><li ng-switch-when=all><rv-mapnav-button class=bold control=self.service.controls.zoom.outButton></rv-mapnav-button></li></ul><ul class=\"rv-button-group hover rv-whiteframe-z2\"><li ng-repeat=\"extraControl in self.service.config.extra\"><rv-mapnav-button control=self.service.controls.extra[extraControl]></rv-mapnav-button><md-divider ng-if=!$last></md-divider></li></ul></div>");
$templateCache.put("app/ui/panels/content-pane.html","<div class=\"rv-content-pane layout-padding\"><div class=rv-header ng-switch on=self.titleStyle><h2 class=md-headline ng-switch-when=headline>{{ self.title }}</h2><h3 class=md-title ng-switch-when=title>{{ self.title }}</h3><h4 class=md-subhead ng-switch-when=subhead>{{ self.title }}</h4><span flex></span><md-button aria-label=Close class=\"md-icon-button black rv-icon-auto\" ng-click=self.closePanel() ng-if=self.closePanel><md-tooltip>Close</md-tooltip><md-icon md-svg-src=navigation:close></md-icon></md-button></div><md-divider></md-divider><md-content class=rv-content><ng-transclude></ng-transclude></md-content></div>");
$templateCache.put("app/ui/panels/filters-panel.html","<div class=\"filters-panel panel rv-whiteframe-z2\"><div ui-view=contentPlug></div></div>");
$templateCache.put("app/ui/panels/main-panel.html","<div class=\"main-panel panel rv-whiteframe-z2\"><div ui-view=contentPlug></div></div>");
$templateCache.put("app/ui/panels/side-panel.html","<div class=\"side-panel panel rv-whiteframe-z2\"><div ui-view=contentPlug></div></div>");
$templateCache.put("app/ui/metadata/metadata.html","<rv-content-pane title-style=subhead title=Metadata><div><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p><p>[ metadata content ]</p></div></rv-content-pane>");
$templateCache.put("app/ui/settings/settings.html","<rv-content-pane title-style=subhead title=Settings><div><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p><p>[ settings content ]</p></div></rv-content-pane>");
$templateCache.put("app/ui/sidenav/menulink.html","<md-button>{{self.section.name}} <span class=md-visually-hidden ng-if=self.isSelected()>current page</span></md-button>");
$templateCache.put("app/ui/sidenav/sidenav.html","<md-sidenav class=\"site-sidenav md-sidenav-left md-whiteframe-z2\" md-component-id=left><header class=nav-header><a class=app-logo href=#><img src=content/images/Map-icon.png alt><h1 class=\"app-logotype md-heading\">FGP R2 Viewer</h1></a></header><md-content flex role=navigation><ul class=app-menu><li class=app-menu-item ng-repeat=\"section in self.menu\"><h2 class=\"menu-heading md-subhead\" ng-if=\"section.type === \'heading\'\">{{section.name}}</h2><rv-menu-link ng-if=\"section.type === \'link\'\" section=section></rv-menu-link><ul class=\"app-menu app-menu-sublist\" ng-if=section.children><li ng-repeat=\"child in section.children\"><rv-menu-link section=child></rv-menu-link></li></ul></li></ul></md-content></md-sidenav>");
$templateCache.put("app/ui/toolbox/toolbox.html","<rv-content-pane title-style=title title=\"Mapping Tools\"><div><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p><p>[ mapping tools content ]</p></div></rv-content-pane>");
$templateCache.put("app/ui/toc/layer-group-toggle-button.html","<md-button aria-label=\"{{ self.control.label }}\" class=\"md-icon-button rv-icon-20\" ng-click=self.action(self.group) ng-disabled=!self.control.enabled><md-tooltip md-direction=top>{{ self.control.tooltip }}</md-tooltip><md-icon md-svg-src=\"{{ self.control.icon }}\"></md-icon></md-button>");
$templateCache.put("app/ui/toc/layer-group-toggle.html","<md-button class=rv-layer-group-button ng-click=self.toggleGroup(self.group)><div class=rv-primary><span class=md-toggle-icon ng-class=\"{ \'rv-toggled\' : self.group.expanded }\"><md-icon md-svg-src=hardware:keyboard_arrow_right></md-icon></span> {{ self.group.name }}</div></md-button><span flex></span><div class=rv-layer-group-controls><rv-layer-group-toggle-button name=visibility></rv-layer-group-toggle-button></div>");
$templateCache.put("app/ui/toc/layer-item-button.html","<md-button aria-label=\"{{ self.control.label }}\" class=\"md-icon-button rv-icon-20\" ng-click=self.action(self.layer) ng-disabled=!self.control.enabled><md-tooltip md-direction=top>{{ self.control.tooltip }}</md-tooltip><md-icon md-svg-src=\"{{ self.control.icon }}\"></md-icon></md-button>");
$templateCache.put("app/ui/toc/layer-item-flag.html","<div class=\"rv-icon-14 rv-layer-item-flag\" ng-if=self.control.visible><md-tooltip md-direction=top>{{ self.control.tooltip }}</md-tooltip><md-icon md-svg-src=\"{{ self.control.icon }}\"></md-icon></div>");
$templateCache.put("app/ui/toc/layer-item.html","<div class=rv-layer-item-icon><img alt ng-src=\"http://lorempixel.com/32/32/?{{ self.layer.id }}\"></div><div class=rv-layer-item-content><div class=rv-layer-item-name>{{ self.layer.name }}</div><div class=rv-layer-item-flags><rv-layer-item-flag name=type></rv-layer-item-flag><rv-layer-item-flag name=data></rv-layer-item-flag><rv-layer-item-flag name=user></rv-layer-item-flag><rv-layer-item-flag name=scale></rv-layer-item-flag></div></div><span flex></span><div class=rv-layer-item-toggles ng-if=\"self.layer.state === \'error\'\"><rv-layer-item-button name=reload></rv-layer-item-button><rv-layer-item-button name=remove></rv-layer-item-button></div><div class=rv-layer-item-toggles ng-if=\"self.layer.state !== \'error\'\"><rv-layer-item-button name=metadata></rv-layer-item-button><rv-layer-item-button name=settings></rv-layer-item-button><rv-layer-item-button name=visibility></rv-layer-item-button></div>");
$templateCache.put("app/ui/toc/toc.html","<rv-content-pane title-style=title title=\"Layer Selector\"><div class=rv-toc ng-controller=\"TocController as self\"><md-button ng-click=self.toggleFilters()>Filters</md-button><md-button ng-click=self.toggleFiltersFull()>Filters mode</md-button><ul class=\"rv-layer-list rv-root\" dx-start-with=self.config><li ng-repeat=\"item in $dxPrior.items\"><rv-layer-item layer=item ng-class=item.state ng-if=\"item.type === \'layer\'\"></rv-layer-item><div class=\"rv-layer-level {{ $dxLevel }}\" ng-if=\"item.type == \'group\'\"><md-divider ng-if=!$first></md-divider><rv-layer-group-toggle group=item></rv-layer-group-toggle><ul class=\"rv-layer-list rv-toggle-slide\" dx-connect=item ng-show=item.expanded></ul><div class=rv-shadow></div><md-divider ng-if=\"$last && $dxLevel === 0\"></md-divider></div></li></ul></div></rv-content-pane>");}]);