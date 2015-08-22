// this file is not going to be useful for now, will find a way to improve the import path

let node_paths = {};

node_paths.env          = process.env.NODE_ENV  || 'development';
node_paths.devPort      = 3001;

node_paths.assets       = 'app/assets';
node_paths.bundles      = 'app/bundles';
node_paths.libs         = 'app/libs';

node_paths.css          = node_paths.assets + 'css';
node_paths.images       = node_paths.assets + 'images';
node_paths.tinies       = node_paths.assets + 'tines';

node_paths.app_bundle   = node_paths.bundles + 'app';
node_paths.actions      = node_paths.app_bundle + 'actions';
node_paths.components   = node_paths.app_bundle + 'components';
node_paths.constants    = node_paths.app_bundle + 'constants';
node_paths.initters     = node_paths.app_bundle + 'initters';
node_paths.layouts      = node_paths.app_bundle + 'layouts';
node_paths.reducers     = node_paths.app_bundle + 'reducers';
node_paths.routes       = node_paths.app_bundle + 'routes';


export default node_paths;
